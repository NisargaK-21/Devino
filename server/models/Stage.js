const mongoose = require("mongoose");
const stageSchema = new mongoose.Schema(
  {
    projectType: {
      type: String,
      required: true,
      enum: ["restaurant", "portfolio", "ecommerce"],
    },
    stageNumber: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tasks: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true },
);
module.exports = mongoose.model("Stage", stageSchema);
