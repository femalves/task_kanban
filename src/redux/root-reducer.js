import { combineReducers } from "redux";
import listReducer from "./list/list.reducer";
export default combineReducers({ list: listReducer });
