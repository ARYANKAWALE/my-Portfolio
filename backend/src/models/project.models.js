import mongoose, { Schema } from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    githubLink: {
      type: String,
      required: true,
    },
    linkedinLink: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    techStack: [
      {
        type: String,
        required: true,
      },
    ],
  },
  { timestamps: true }
);

export const Project = mongoose.model("Project", projectSchema);
