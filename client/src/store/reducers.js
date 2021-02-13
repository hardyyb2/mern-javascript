import { combineReducers } from "redux";

import homeReducer from "./ducks/home";

export default combineReducers({ home: homeReducer });
