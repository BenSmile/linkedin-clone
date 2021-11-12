import { auth, provider } from "../../firebase";

import { SET_USER } from "../constants/userConstants";

export const signIn = (user) => async (dispatch) => {
  auth
    .signInWithPopup(provider)
    .then((data) => {
      // console.log('data = ',data.user)
      dispatch({
        type: SET_USER,
        payload: data.user,
      });
    })
    .catch((err) => {
      alert(err.message);
    });
};
