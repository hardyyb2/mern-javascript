import mongoose from "mongoose";
import dotenv from "dotenv";

import Logs from "../utils/logs.js";

const { dbSuccessLog, dbErrorLog } = Logs;

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || `mongodb://127.0.0.1:27017/test`;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .catch((error) => {
    dbErrorLog(`Error Occured in connecting MongoDB \n ${error}`);
  });

mongoose.connection.on("connected", () => {
  dbSuccessLog(`Mongoose connected to ${process.env.MONGODB_URI}`);
});
mongoose.connection.on("error", (err) => {
  dbErrorLog("Mongoose connection error:", err);
});
mongoose.connection.on("disconnected", () => {
  dbErrorLog("Mongoose disconnected");
});
