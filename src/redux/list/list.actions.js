import ListsActionTypes from "./list.types";

// export function removeList(list) {
//   console.log(list);
//   return {
//     type: ListsActionTypes.REMOVE_LIST,
//     payload: list,
//   };
// }

export const addList = (list) => ({
  type: ListsActionTypes.ADD_LIST,
  payload: list,
});
export const removeList = (list) => ({
  type: ListsActionTypes.REMOVE_LIST,
  payload: list,
});

export const addCard = (card) => ({
  type: ListsActionTypes.ADD_CARD,
  payload: card,
});

export const removeCard = (card) => ({
  type: ListsActionTypes.REMOVE_CARD,
  payload: card,
});

export const editList = (list) => ({
  type: ListsActionTypes.EDIT_LIST,
  payload: list,
});

export const toggleAddListHidden = () => ({
  type: ListsActionTypes.TOGGLE_ADD_LIST_HIDDEN,
});

export const moveCard = (card) => ({
  type: ListsActionTypes.MOVE_CARD_SAME_LIST,
  payload: card,
});

export const moveCardDifferent = (card) => ({
  type: ListsActionTypes.MOVE_CARD_DIFFERENT_LIST,
  payload: card,
});
