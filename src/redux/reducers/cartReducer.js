import * as actionTypes from "../actions/actionTypes";
import initialStates from "../initialStates";

const cartReducer = (state = initialStates.cart, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const exist = state.find((x) => x.id === action.payload.id);
      if (exist) {
        return state.map((x) =>
          x.id === action.payload.id ? { ...x, quantity: x.quantity + 1 } : x
        );
      } else {
        return [
          ...state,
          {
            ...action.payload,
            quantity: 1,
          },
        ];
      }
      break;

    case actionTypes.REMOVE_FROM_CART:
      const exist1 = state.find((x) => x.id === action.payload.id);
      if (exist1.quantity === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === action.payload.id ? { ...x, quantity: x.quantity - 1 } : x
        );
      }
      break;

    case actionTypes.EMPTYCART:
      return (state = []);
      break;

    default:
      return state;
      break;
  }
};

export const getBasketTotal = (state) =>
  state?.reduce((amount, item) => item.price * item.quantity + amount, 0);

export default cartReducer;
