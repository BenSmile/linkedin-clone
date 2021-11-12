import { auth, provider } from '../firebase';

export function signinApi() {
  return (dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((payload) => {
        console.log(payload);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
}
