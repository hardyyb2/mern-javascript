import actions from "./actions";
import { ClientLibrary } from "../../../lib";

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
    localStorage.setItem("userDetails", JSON.stringify({ name, age }));

    dispatch(actions.savedName());
  } catch (err) {
    const { error = DEFAULT_ERR_MESSAGE } = err;

    dispatch(actions.receiveNameError(error));
  }
};

const operations = {
  fetchName,
  addName,
};

export default operations;
