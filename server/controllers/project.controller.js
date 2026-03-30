const Project = require('../models/Project');
const Submission = require('../models/Submission');
const Stage = require('../models/Stage');
const Template = require('../models/Template');
const AILog = require('../models/AILog');
const { analyzeCode } = require('../src/services/ai.service');

const TOTAL_STAGES = 5;

const STAGE_SLUGS = {
  frontend: 1,
  backend: 2,
  database: 3,
  auth: 4,
  deploy: 5,
};
const STAGE_NAMES_BY_NUMBER = Object.fromEntries(Object.entries(STAGE_SLUGS).map(([slug, num]) => [num, slug]));

function resolveStageNumber(stageParam) {
  if (!stageParam) return null;

  const asNumber = Number(stageParam);
  if (!Number.isNaN(asNumber) && Number.isInteger(asNumber) && asNumber > 0) {
    return asNumber;
  }

  const lower = String(stageParam).toLowerCase();
  if (STAGE_SLUGS[lower]) {
    return STAGE_SLUGS[lower];
  }

  return null;
}

exports.createProject = async (req, res, next) => {
  try {
    const { projectType, templateId } = req.body;
    if (!projectType || !templateId) {
      return res.status(400).json({ success: false, message: 'projectType and templateId are required' });
    }

    const template = await Template.findById(templateId);
    if (!template) {
      return res.status(404).json({ success: false, message: 'Template not found' });
    }

    if (template.projectType !== projectType) {
      return res.status(400).json({ success: false, message: 'projectType mismatch with template' });
    }

    const stageStatus = [];
    for (let i = 1; i <= template.stageCount; i += 1) {
      stageStatus.push({ stageNumber: i, status: i === 1 ? 'unlocked' : 'locked', attempts: 0, updatedAt: new Date() });
    }

    const project = new Project({
      userId: req.user._id,
      projectType: template.projectType,
      templateId: template._id,
      currentStage: 1,
      stageStatus,
      completedStages: [],
      progressPercentage: 0,
      version: 1,
      isArchived: false,
    });

    await project.save();
    res.status(201).json({ success: true, project });
  } catch (error) {
    next(error);
  }
};

exports.getAllProjects = async (req, res, next) => {
  try {
    const projects = await Project.find({ userId: req.user._id }).populate('templateId');
    res.json({ success: true, projects });
  } catch (error) {
    next(error);
  }
};

exports.getProject = async (req, res, next) => {
  try {
    const project = await Project.findOne({ _id: req.params.id, userId: req.user._id }).populate('templateId');
    if (!project) return res.status(404).json({ success: false, message: 'Project not found' });
    res.json({ success: true, project });
  } catch (error) {
    next(error);
  }
};

exports.getProgress = async (req, res, next) => {
  try {
    const project = await Project.findOne({ _id: req.params.id, userId: req.user._id });
    if (!project) return res.status(404).json({ success: false, message: 'Project not found' });

    res.json({
      success: true,
      currentStage: project.currentStage,
      completedStages: project.completedStages,
      progressPercentage: project.progressPercentage,
      stageStatus: project.stageStatus,
    });
  } catch (error) {
    next(error);
  }
};

exports.submitCodeForReview = async (req, res, next) => {
  try {
    const projectId = req.params.id;
    const stageNumber = resolveStageNumber(req.params.stage);
    const { codeSnippet, code, files = [], context = {} } = req.body;
    const resolvedCodeSnippet = (codeSnippet || code || '').trim();

    if (!stageNumber) {
      return res.status(400).json({ success: false, message: 'Invalid stage identifier' });
    }

    if (!resolvedCodeSnippet) {
      return res.status(400).json({ success: false, message: 'codeSnippet is required' });
    }

    const project = await Project.findOne({ _id: projectId, userId: req.user._id });
    if (!project) return res.status(404).json({ success: false, message: 'Project not found' });

    if (stageNumber !== project.currentStage) {
      return res.status(400).json({ success: false, message: 'Stage is not unlocked or incorrect stage number' });
    }

    const submission = new Submission({
      projectId,
      stageNumber,
      userId: req.user._id,
      codeSnippet: resolvedCodeSnippet,
      files,
      status: 'pending',
      attempt: (project.stageStatus.find(s => s.stageNumber === stageNumber)?.attempts || 0) + 1,
      metadata: { context },
    });
    await submission.save();

    const stageDefinition = await Stage.findOne({ projectType: project.projectType, stageNumber });
    const stageName = STAGE_NAMES_BY_NUMBER[stageNumber] || `stage-${stageNumber}`;

    const aiPayload = {
      codeSnippet: resolvedCodeSnippet,
      stage: stageDefinition?.title || stageName,
      projectContext: {
        id: projectId,
        projectType: project.projectType,
        stage: stageName,
        ...context,
      },
      requirements: stageDefinition?.requirements || [],
      expectedOutput: stageDefinition?.expectedOutput || '',
    };

    const aiResult = await analyzeCode(aiPayload);

    submission.aiResult = aiResult;
    submission.status = aiResult.approved ? 'passed' : 'failed';
    await submission.save();

    const aiLog = new AILog({
      projectId,
      submissionId: submission._id,
      stageNumber,
      codeSnippet,
      promptHash: aiResult.promptHash || null,
      model: aiResult.model || 'gemini-1.5-flash',
      rawResponse: aiResult.rawResponse || {},
      parsedFeedback: {
        approved: aiResult.approved,
        score: aiResult.score,
        errors: aiResult.errors,
        warnings: aiResult.warnings,
        suggestions: aiResult.suggestions,
        message: aiResult.feedback,
      },
    });
    await aiLog.save();

    if (aiResult.approved) {
      const completedStage = project.stageStatus.find(s => s.stageNumber === stageNumber);
      if (completedStage) {
        completedStage.status = 'passed';
        completedStage.attempts = submission.attempt;
        completedStage.updatedAt = new Date();
      } else {
        project.stageStatus.push({ stageNumber, status: 'passed', attempts: submission.attempt, updatedAt: new Date() });
      }

      if (!project.completedStages.includes(stageNumber)) {
        project.completedStages.push(stageNumber);
      }

      const totalStages = project.stageStatus.length || TOTAL_STAGES;
      project.currentStage = stageNumber + 1;
      project.progressPercentage = Math.round((project.completedStages.length / totalStages) * 100);

      // unlock next stage in status map
      const next = project.stageStatus.find((s) => s.stageNumber === project.currentStage);
      if (next) {
        next.status = 'unlocked';
      } else {
        project.stageStatus.push({ stageNumber: project.currentStage, status: 'unlocked', attempts: 0, updatedAt: new Date() });
      }

      await project.save();
    } else {
      // failed path: maintain stage as in_progress/failed count
      const currentStage = project.stageStatus.find(s => s.stageNumber === stageNumber);
      if (currentStage) {
        currentStage.status = 'failed';
        currentStage.attempts = submission.attempt;
        currentStage.updatedAt = new Date();
      } else {
        project.stageStatus.push({ stageNumber, status: 'failed', attempts: submission.attempt, updatedAt: new Date() });
      }
      await project.save();
    }

    res.json({ success: true, submission, aiResult });
  } catch (error) {
    next(error);
  }
};

exports.getStageSubmissions = async (req, res, next) => {
  try {
    const projectId = req.params.id;
    const stageNumber = resolveStageNumber(req.params.stage);
    if (!stageNumber) {
      return res.status(400).json({ success: false, message: 'Invalid stage identifier' });
    }
    const project = await Project.findOne({ _id: projectId, userId: req.user._id });
    if (!project) return res.status(404).json({ success: false, message: 'Project not found' });

    const submissions = await Submission.find({ projectId, stageNumber }).sort({ createdAt: -1 });
    res.json({ success: true, submissions });
  } catch (error) {
    next(error);
  }
};

exports.retryStage = async (req, res, next) => {
  try {
    const projectId = req.params.id;
    const stageNumber = resolveStageNumber(req.params.stage);
    if (!stageNumber) {
      return res.status(400).json({ success: false, message: 'Invalid stage identifier' });
    }
    const project = await Project.findOne({ _id: projectId, userId: req.user._id });
    if (!project) return res.status(404).json({ success: false, message: 'Project not found' });

    const stageStatus = project.stageStatus.find(s => s.stageNumber === stageNumber);
    const attempts = stageStatus?.attempts || 0;
    if (attempts >= 5) {
      return res.status(429).json({ success: false, message: 'Retry limit reached' });
    }

    // unlocked for retry
    if (stageStatus) {
      stageStatus.status = 'unlocked';
      stageStatus.attempts = attempts;
      stageStatus.updatedAt = new Date();
    } else {
      project.stageStatus.push({ stageNumber, status: 'unlocked', attempts, updatedAt: new Date() });
    }
    await project.save();

    res.json({ success: true, message: 'Retry unlocked' });
  } catch (error) {
    next(error);
  }
};
