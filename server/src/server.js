const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");

const errorHandler = require("./middleware/errorHandler");
const Logs = require("./utils/logs");
require("./services/db.service");

const NameRoutes = require("./routes/name.route");

const { errorLog, successLog } = Logs;

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

app.use(
  morgan("dev", {
    skip: function (req, res) {
      return res.statusCode < 400;
    },
  })
);

const API_ROUTE = process.env.API_ROUTE || `/api/v1.1`;

app.use(`${API_ROUTE}/name`, NameRoutes);

app.use((err, req, res, next) => errorHandler(err, res));

const server = app.listen(PORT, (err) => {
  if (err) {
    return errorLog(`Failed to start Server`, err);
  }
  successLog(`Listening to port ${PORT} in mode ${process.env.NODE_ENV}`);
});

process.on("unhandledRejection", (err, _) => {
  errorLog(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
