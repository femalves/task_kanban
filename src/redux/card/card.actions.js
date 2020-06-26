import CardActionTypes from "./card.types";

// export const removeCard = (card) => ({
//   type: CardActionTypes.REMOVE_CARD,
//   payload: card,
// });

export function editCard(card) {
  // console.log("addList", list);
  return { type: CardActionTypes.ADD_CARD, payload: card };
}
