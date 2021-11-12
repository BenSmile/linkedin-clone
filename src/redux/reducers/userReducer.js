import * as actionTypes from "../constants/userConstants";

export const userReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      console.log('-> ',action);
      return {
        ...state,
        user:action.payload
      }


    default:
      return state;
  }
};
