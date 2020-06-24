import BoardActionTypes from "./board.types";

export function addList(list) {
  // console.log("addList", list);
  return { type: BoardActionTypes.ADD_LIST, payload: list };
}
export function removeList(list) {
  // console.log("removeList", list.id);
  return { type: BoardActionTypes.REMOVE_LIST, payload: list };
}
