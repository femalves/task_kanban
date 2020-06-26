import { combineReducers } from "redux";
import listReducer from "./list/list.reducer";
import cardReducer from "./card/card.reducer";
const rootReducer = combineReducers({
  lists: listReducer,
  cards: cardReducer,
});

export default rootReducer;
