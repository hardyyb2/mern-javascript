import types from "./homeActionTypes";

const INITIAL_STATE = {
  name: "",
  age: 0,
  loading: false,
  error: null,
};

const homeReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.REQUEST_NAME:
      return {
        ...state,
        loading: true,
      };

    case types.RECEIVE_NAME:
      const { name, age = 0 } = payload;
      return {
        ...state,
        name,
        age,
        loading: false,
      };

    case types.RECEIVE_NAME_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    case types.SAVED_NAME:
      return {
        ...state,
        loading: false,
      };

    case types.DELETED_NAME:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default homeReducer;
