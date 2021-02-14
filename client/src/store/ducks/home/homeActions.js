import types from "./homeActionTypes";

const requestName = () => ({
  type: types.REQUEST_NAME,
});

const receiveName = (name, age) => ({
  type: types.RECEIVE_NAME,
  payload: { name, age },
});

const receiveNameError = (error) => ({
  type: types.RECEIVE_NAME_ERROR,
  payload: error,
});

const savedName = () => ({
  type: types.SAVED_NAME,
});

const deletedName = () => ({
  type: types.DELETED_NAME,
});

const actions = {
  requestName,
  receiveName,
  receiveNameError,
  savedName,
  deletedName,
};

export default actions;
