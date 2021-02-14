import actions from "./homeActions";
import { ClientLibrary } from "../../../lib";
import {
  deleteFromLocalStorage,
  saveToLocalStorage,
} from "../../../utils/functions";
import { USER_DETAILS_KEY } from "../../../utils/constants";

const db = new ClientLibrary();

const DEFAULT_ERR_MESSAGE = "Some Error Occurred";

const fetchName = (name) => async (dispatch) => {
  dispatch(actions.requestName());

  try {
    const {
      data: { data },
    } = await db.getName(name);

    dispatch(actions.receiveName(data.name, data.age));
  } catch (err) {
    const { error = DEFAULT_ERR_MESSAGE } = err;

    dispatch(actions.receiveNameError(error));
  }
};

const addName = (name, age) => async (dispatch) => {
  dispatch(actions.requestName());

  try {
    await db.createName(name, age);
    saveToLocalStorage(USER_DETAILS_KEY, { name, age });

    dispatch(actions.savedName());
  } catch (err) {
    const { error = DEFAULT_ERR_MESSAGE } = err;

    dispatch(actions.receiveNameError(error));
  }
};

const deleteName = (name) => async (dispatch) => {
  dispatch(actions.requestName());
  try {
    await db.deleteName(name);
    deleteFromLocalStorage(USER_DETAILS_KEY);

    dispatch(actions.deletedName());
  } catch (err) {
    const { error = DEFAULT_ERR_MESSAGE } = err;

    dispatch(actions.receiveNameError(error));
  }
};

const operations = {
  fetchName,
  addName,
  deleteName,
};

export default operations;
