import CardActionTypes from "./card.types";

const initialState = {
  cards: [],
};

const CardReducer = (state = initialState, action) => {
  switch (action.type) {
    case CardActionTypes.EDIT_CARD:
      return state;
    default:
      return state;
  }
};

export default CardReducer;
