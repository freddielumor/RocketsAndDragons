import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";

const initialState = {};

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);
