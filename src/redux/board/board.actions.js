import { ADD_LIST, REMOVE_LIST } from "./board.types";

export const addList = (list) => ({
  type: ADD_LIST,
  payload: list,
});

export const removeList = (list) => ({
  type: REMOVE_LIST,
  payload: list,
});
