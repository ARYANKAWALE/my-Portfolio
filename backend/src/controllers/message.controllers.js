import { Message } from "./models/Message.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const message = asyncHandler(async (req, res) => {
  const { senderName, senderEmail, message } = req.body;

  if (
    [senderName, senderEmail, message].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const newMessage = await Message.create({
    senderName,
    senderEmail,
    message,
  });

  if (!newMessage) {
    throw new ApiError(400, "Failed to send Message");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, "Message send SuccessFully"));
});

export { message };
