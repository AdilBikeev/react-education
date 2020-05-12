import {combineReducers, createStore} from "redux";
import sidebarReducer from "./sidebar-reducer";
import { usersReducer } from "./users-reducer";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

window.store = store;


export default store;