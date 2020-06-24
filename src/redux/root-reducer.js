import { combineReducers } from "redux";
import boardReducer from "./board/board.reducer";
export default combineReducers({ board: boardReducer });
