import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import listReducer from "./list/list.reducer";
import cardReducer from "./card/card.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["lists"],
};

const rootReducer = combineReducers({
  lists: listReducer,
  cards: cardReducer,
});

export default persistReducer(persistConfig, rootReducer);
