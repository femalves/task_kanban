import ListActionTypes from "./list.types";

export const addCard = (card) => ({
  type: ListActionTypes.ADD_CARD,
  payload: card,
});

export const removeCard = (card) => ({
  type: ListActionTypes.REMOVE_CARD,
  payload: card,
});

export const editList = (list) => ({
  type: ListActionTypes.EDIT_LIST,
  payload: list,
});

export const toggleAddListHidden = () => ({
  type: ListActionTypes.TOGGLE_ADD_LIST_HIDDEN,
});

export const moveCard = (card) => ({
  type: ListActionTypes.MOVE_CARD_SAME_LIST,
  payload: card,
});
