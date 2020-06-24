import { loadLists } from "../../services/api";
import BoardActionTypes from "./board.types";

const initialState = {
  lists: loadLists(),
};

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case BoardActionTypes.ADD_LIST:
      return { ...state, lists: [action.payload, ...state.lists] };
    case BoardActionTypes.REMOVE_LIST:
      return {
        ...state,
        board: state.board.filter((list) => list.id !== action.payload),
      };
    default:
      return state;
  }
};

export default boardReducer;
