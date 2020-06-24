import ListActionTypes from "./list.types";

const INITIAL_STATE = {
  hidden: true,
  list: [{ id: "", title: "", creatable: false, done: false, cards: [] }],
};

const listReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ListActionTypes.TOGGLE_ADD_LIST_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default listReducer;
