import * as actionTypes from "../actions/types";

const initialState = {
  itemsList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ITEMS: {
      return {
        ...state,
        itemsList: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
