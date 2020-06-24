import board from "../../services/api";
import BoardActionTypes from "./board.types";

const initialState = {
  lists: board,
};

const boardReducer = (state = initialState, action) => {
  // console.log(state.lists.filter((list) => list.id !== "jfie0288347"));
  // console.log(action);
  switch (action.type) {
    case BoardActionTypes.ADD_LIST:
      return { ...state, lists: [action.payload, ...state.lists] };
    case BoardActionTypes.REMOVE_LIST:
      return {
        ...state,
        lists: state.lists.filter((list) => list.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default boardReducer;
