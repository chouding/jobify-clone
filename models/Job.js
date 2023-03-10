import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please provide company"],
      maxLength: 100,
    },
    position: {
      type: String,
      required: [true, "Please provide position"],
      maxLength: 100,
    },
    status: {
      type: String,
      enum: ["interview", "declined", "pending"],
      default: "pending",
    },
    jobType: {
      type: String,
      enum: ["internship", "full-time", "part-time", "remote"],
      default: "internship",
    },
    jobLocation: {
      type: String,
      default: "my city",
      required: true,
    },
    createdBy: {
      type: String,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", JobSchema);
