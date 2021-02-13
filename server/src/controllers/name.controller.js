const { NameModel } = require("../models");
const { asyncHandler } = require("../middleware");
const { ErrorResponse, send } = require("../common");
const { Messages } = require("../utils");

const {
  PROVIDE_NAME,
  NOT_FOUND,
  PROVIDE_AGE,
  CREATED,
  UPDATED,
  DELETED,
} = Messages;

const getName = asyncHandler(async (req, res, next) => {
  const { name: reqName } = req.params;

  if (!reqName) {
    return next(new ErrorResponse(PROVIDE_NAME, 400));
  }

  const name = await NameModel.findOne({ name: reqName });

  if (!name) {
    return next(new ErrorResponse(NOT_FOUND, 404));
  }

  return send(res, 200, name);
});

const postName = asyncHandler(async (req, res, next) => {
  const { name: reqName, age } = req.body;

  if (!reqName) {
    return next(new ErrorResponse(PROVIDE_NAME, 400));
  } else if (!age) {
    return next(new ErrorResponse(PROVIDE_AGE, 400));
  }

  const name = new NameModel({ name: reqName, age });
  await name.save();

  return send(res, 201, CREATED);
});

const updateName = asyncHandler(async (req, res, next) => {
  const { name: oldName } = req.params;
  const { name: newName, age } = req.body;

  if (!oldName || !newName) {
    return next(new ErrorResponse(PROVIDE_NAME, 400));
  }

  const updatedObj = { name: newName, ...(age && { age }) };

  const updatedName = await NameModel.findOneAndUpdate(
    { name: oldName },
    updatedObj,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedName) {
    return next(new ErrorResponse(NOT_FOUND, 404));
  }

  send(res, 201, UPDATED);
});

const deleteName = asyncHandler(async (req, res, next) => {
  const { name } = req.params;

  if (!name) {
    return next(new ErrorResponse(PROVIDE_NAME, 400));
  }

  const deletedName = await NameModel.findOneAndDelete({ name });

  if (!deletedName) {
    return next(new ErrorResponse(NOT_FOUND, 404));
  }

  send(res, 200, DELETED);
});

module.exports = {
  getName,
  postName,
  updateName,
  deleteName,
};
