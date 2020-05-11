import { createStore, combineReducers } from "redux";
import messageReducer from "./messageReducer";
import postReducer from "./postReducer";

let reducers = combineReducers({
    Messages: messageReducer,
    News: postReducer
});

let store = createStore(reducers);

export default store;