const mongoose = require("mongoose");

const nameSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name Required"],
    unique: true,
  },
  age: {
    type: Number,
    required: [true, "Age required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const NameModel = mongoose.model("name", nameSchema);

module.exports = NameModel;
