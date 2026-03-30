const User = require('../models/User');
const TokenBlacklist = require('../models/TokenBlacklist');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

function generateAccessToken(user) {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '15m' });
}

function generateRefreshToken() {
  return crypto.randomBytes(40).toString('hex');
}

exports.register = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
          return res.status(400).json({ message: 'username, email and password are required' });
        }

        const existing = await User.findOne({ email });
        if (existing) {
          return res.status(409).json({ message: 'Email already registered' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        next(err);
    }
};

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
          return res.status(400).json({ message: 'email and password are required' });
        }
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken();

        user.refreshTokenHash = await bcrypt.hash(refreshToken, 10);
        user.lastLoginAt = new Date();
        await user.save();

        // Set refresh token as httpOnly cookie
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // secure in prod
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });

        // Generate CSRF token
        const csrfToken = crypto.randomBytes(32).toString('hex');
        res.cookie('csrfToken', csrfToken, {
            httpOnly: false, // accessible to JS for sending in requests
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.json({
          accessToken,
          csrfToken, // send to frontend to store
          user: {
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
          },
        });
    } catch (err) {
        next(err);
    }
};

exports.refreshToken = async (req, res, next) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    const csrfToken = req.body.csrfToken;
    const cookieCsrf = req.cookies.csrfToken;

    if (!csrfToken || csrfToken !== cookieCsrf) {
      return res.status(403).json({ message: 'Invalid CSRF token' });
    }

    if (!refreshToken) return res.status(400).json({ message: 'Refresh token missing' });

    const user = await User.findOne({ refreshTokenHash: { $exists: true, $ne: null } });
    if (!user) {
      return res.status(401).json({ message: 'Invalid refresh token' });
    }

    const match = await bcrypt.compare(refreshToken, user.refreshTokenHash);
    if (!match) {
      return res.status(401).json({ message: 'Invalid refresh token' });
    }

    // Check if refresh token is blacklisted
    const blacklisted = await TokenBlacklist.findOne({ token: refreshToken, type: 'refresh' });
    if (blacklisted) {
      return res.status(401).json({ message: 'Token has been invalidated' });
    }

    const accessToken = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken();

    // Blacklist old refresh token
    await TokenBlacklist.create({
      token: refreshToken,
      type: 'refresh',
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
    });

    user.refreshTokenHash = await bcrypt.hash(newRefreshToken, 10);
    await user.save();

    // Set new refresh token cookie
    res.cookie('refreshToken', newRefreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({ accessToken });
  } catch (err) {
    next(err);
  }
};

exports.logout = async (req, res, next) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    const csrfToken = req.body.csrfToken;
    const cookieCsrf = req.cookies.csrfToken;

    if (!csrfToken || csrfToken !== cookieCsrf) {
      return res.status(403).json({ message: 'Invalid CSRF token' });
    }

    if (refreshToken) {
      // Blacklist the refresh token
      await TokenBlacklist.create({
        token: refreshToken,
        type: 'refresh',
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      });

      // Find and clear user's refresh token hash
      const users = await User.find({ refreshTokenHash: { $exists: true, $ne: null } });
      for (const u of users) {
        const match = await bcrypt.compare(refreshToken, u.refreshTokenHash);
        if (match) {
          u.refreshTokenHash = null;
          await u.save();
          break;
        }
      }
    }

    // Clear cookies
    res.clearCookie('refreshToken', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });
    res.clearCookie('csrfToken', {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });

    res.json({ message: 'Logged out successfully' });
  } catch (err) {
    next(err);
  }
};

exports.me = async (req, res, next) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    res.json({ user: req.user });
  } catch (err) {
    next(err);
  }
}; 