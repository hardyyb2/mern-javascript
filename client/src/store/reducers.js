import { combineReducers } from "redux";

import homeReducer from "../components/home/duck";

export default combineReducers({ home: homeReducer });
