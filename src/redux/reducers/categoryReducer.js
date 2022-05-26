import * as actionTypes from "../actions/actionTypes";
import initialStates from "../initialStates";

const categoryReducer = (state = initialStates.category, action) => {
  switch (action.type) {
    case actionTypes.SELECT_CATEGORY:
      return {
        state: action.payload,
      };
      break;

    case actionTypes.DESELECT_CATEGORY:
      return {
        state: action.payload,
      };
      break;

    default:
      return state;
      break;
  }
};

export default categoryReducer;
