const send = (res, status, data) => {
  const statusInitial = status.toString().charAt(0);
  const errorStatusInitials = ["4", "5"];

  let success = errorStatusInitials.includes(statusInitial) ? false : true;

  let resObj = success ? { success, data } : { success, error: data };
  return res.status(status).send(resObj);
};

module.exports = send;
