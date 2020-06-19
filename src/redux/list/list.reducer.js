import ListActionTypes from "./list.types";
import { addItemToList } from "./list.utils";
import { removeItemFromList } from "./list.utils";

const INITIAL_STATE = {
  hidden: true,
  listItems: [],
};

const listReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ListActionTypes.ADD_ITEM:
      return {
        ...state,
        listItems: addItemToList(state.listItems, action.payload),
      };
    case ListActionTypes.REMOVE_ITEM:
      return {
        ...state,
        listItems: removeItemFromList(state.listItems, action.payload),
      };
    default:
      return state;
  }
};

export default listReducer;
