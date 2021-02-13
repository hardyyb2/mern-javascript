const express = require("express");
const { NameController } = require("../controllers");

const { getName, postName, updateName, deleteName } = NameController;
const router = express.Router();

router.route("/:name").get(getName).put(updateName).delete(deleteName);
router.route("/").post(postName);

module.exports = router;
