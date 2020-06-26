import ListsActionTypes from "./list.types";
import board from "../../services/api";

const initialState = {
  lists: board,
};

const ListsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ListsActionTypes.REMOVE_LIST:
      return {
        ...state,
        lists: state.lists.filter((list) => list.id !== action.payload.id),
      };
    case ListsActionTypes.REMOVE_CARD:
      let cardID = action.payload.card.id;
      let list = action.payload.list;
      let listID = list.id;

      let newCards = list.cards.filter((card) => card.id !== cardID);
      let newList = { ...list, cards: newCards };

      let new_lists = state.lists.map((list) => {
        if (list.id === listID) {
          list = newList;
        }
        return list;
      });
      return { ...state, lists: new_lists };

    case ListsActionTypes.TOGGLE_ADD_LIST_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default ListsReducer;
