import { combineReducers } from "redux";
import boardReducer from "./board/board.reducer";
import listReducer from "./list/list.reducer";

const rootReducer = combineReducers({
  board: boardReducer,
  list: listReducer,
});

export default rootReducer;
