import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import { userReducer } from "./reducers/userReducer";

const reducer = combineReducers({
  user: userReducer
});

const middleware = [thunk];


const INITIAL_STATE = {
  user: { },
};

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
