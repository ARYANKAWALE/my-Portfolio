import { Project } from "../models/project.models.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const getAllProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find({});

  if (!projects) {
    throw new ApiError(404, "No project Found");
  }

  return res
    .status(200)
    .json(new ApiResponse(projects, "Project fetched Successfully"));
});

export { getAllProjects };
