import { combineReducers } from "redux";

import homeReducer from "../components/ducks/home";

export default combineReducers({ home: homeReducer });
