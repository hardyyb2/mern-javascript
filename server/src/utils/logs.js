import chalk from "chalk";

const Log = (msg) => console.log(msg);
const successLog = (msg) => console.log(chalk.bgGreen.black(msg));
const warningLog = (msg) => console.log(chalk.yellow(msg));
const errorLog = (msg) => console.log(chalk.bgRed.white(msg));
const dbSuccessLog = (msg) => console.log(chalk.black.bgWhite(msg));
const dbErrorLog = (msg) => console.log(chalk.red(msg));

const Logs = {
  Log,
  successLog,
  warningLog,
  errorLog,
  dbSuccessLog,
  dbErrorLog,
};

export default Logs;
