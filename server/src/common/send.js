const send = (res, status, data) => {
  const statusInitial = status.toString().charAt(0);
  let success = statusInitial === "4" || statusInitial === "5" ? false : true;

  let resObj = success ? { success, data } : { success, error: data };
  return res.status(status).send(resObj);
};

export default send;
