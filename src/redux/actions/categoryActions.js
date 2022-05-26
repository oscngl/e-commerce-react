import * as actionTypes from "./actionTypes";

export const selectCategory = (category) => {
  return {
    type: actionTypes.SELECT_CATEGORY,
    payload: category,
  };
};

export const deselectCategory = () => {
  return {
    type: actionTypes.DESELECT_CATEGORY,
    payload: null,
  };
};
