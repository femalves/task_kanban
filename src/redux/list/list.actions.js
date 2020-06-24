import {
  ADD_LIST,
  ADD_CARD,
  REMOVE_CARD,
  EDIT_LIST,
  REMOVE_LIST,
} from "./list.types";

export const addList = (list) => ({
  type: ADD_LIST,
  payload: list,
});

export const addCard = (card) => ({
  type: ADD_CARD,
  payload: card,
});

export const removeCard = (card) => ({
  type: REMOVE_CARD,
  payload: card,
});

export const editList = (list) => ({
  type: EDIT_LIST,
  payload: list,
});

export const removeList = (list) => ({
  type: REMOVE_LIST,
  payload: list,
});
