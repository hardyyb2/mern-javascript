import asyncHandler from "../middleware/asyncHandler.js";
import errorResponse from "../common/errorResponse.js";
import send from "../common/send.js";
import messages from "../utils/messages.js";

import Name from "../models/name.model.js";

const {
  PROVIDE_NAME,
  NOT_FOUND,
  PROVIDE_AGE,
  CREATED,
  UPDATED,
  DELETED,
} = messages;

export const getName = asyncHandler(async (req, res, next) => {
  const { name: reqName } = req.params;

  if (!reqName) {
    return next(new errorResponse(PROVIDE_NAME, 400));
  }

  const name = await Name.findOne({ name: reqName });

  if (!name) {
    return next(new errorResponse(NOT_FOUND, 404));
  }

  return send(res, 200, name);
});

export const postName = asyncHandler(async (req, res, next) => {
  const { name: reqName, age } = req.body;

  if (!reqName) {
    return next(new errorResponse(PROVIDE_NAME, 400));
  } else if (!age) {
    return next(new errorResponse(PROVIDE_AGE, 400));
  }

  const name = new Name({ name: reqName, age });
  await name.save();

  return send(res, 201, CREATED);
});

export const updateName = asyncHandler(async (req, res, next) => {
  const { name: oldName } = req.params;
  const { name: newName, age } = req.body;

  if (!oldName || !newName) {
    return next(new errorResponse(PROVIDE_NAME, 400));
  }

  const updatedObj = { name: newName, ...(age && { age }) };

  const updatedName = await Name.findOneAndUpdate(
    { name: oldName },
    updatedObj,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedName) {
    return next(new errorResponse(NOT_FOUND, 404));
  }

  send(res, 201, UPDATED);
});

export const deleteName = asyncHandler(async (req, res, next) => {
  const { name } = req.params;

  if (!name) {
    return next(new errorResponse(PROVIDE_NAME, 400));
  }

  const deletedName = await Name.findOneAndDelete({ name });

  if (!deletedName) {
    return next(new errorResponse(NOT_FOUND, 404));
  }

  send(res, 200, DELETED);
});
