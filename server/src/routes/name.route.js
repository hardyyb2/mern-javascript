const express = require("express");

const router = express.Router();

const {
  getName,
  postName,
  updateName,
  deleteName,
} = require("../controllers/name.controller");

router.route("/:name").get(getName).put(updateName).delete(deleteName);

router.route("/").post(postName);

module.exports = router;
