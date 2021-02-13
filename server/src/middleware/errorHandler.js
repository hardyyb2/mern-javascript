const { ErrorResponse } = require("../common");
const { getDuplicate } = require("../utils");
const { Messages } = require("../utils");

const { SERVER_ERROR } = Messages;

const errorHandler = (err, res) => {
  let error = { ...err };
  error.message = err.message;

  console.log(error);

  //bad object id
  if (err.name === "CastError") {
    const message = `Resources not found for ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  //duplicate key
  if (err.code === 11000) {
    const errMsg = getDuplicate(err);
    const message = `Duplicate field value entered. ${errMsg} `;
    error = new ErrorResponse(message, 400);
  }

  //validatior error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((val) => val.message);
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || SERVER_ERROR,
  });
};

module.exports = errorHandler;
