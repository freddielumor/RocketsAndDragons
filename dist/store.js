import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
var initialState = {};
export var store = createStore(rootReducer, initialState, applyMiddleware(thunk));
//# sourceMappingURL=store.js.map