import express from "express";

const router = express.Router();

import {
  getName,
  postName,
  updateName,
  deleteName,
} from "../controllers/name.controller.js";

router.route("/:name").get(getName).put(updateName).delete(deleteName);

router.route("/").post(postName);

export default router;
