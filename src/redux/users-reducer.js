import { act } from "react-dom/test-utils";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: []
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            let stateCopy = {
                ...state,
                users: state.users.map(x => {
                    if (x.id === action.userId) {
                        return { ...x, followed: true }
                    } else {
                        return x;
                    }
                })
            }
            return stateCopy;
        }
        case UNFOLLOW: {
            let stateCopy = {
                ...state,
                users: state.users.map(x => {
                    if (x.id === action.userId) {
                        return { ...x, followed: false }
                    } else {
                        return x;
                    }
                })
            }
            return stateCopy;
        }

        case SET_USERS:
            return { ...state, users: [...state.users, ...action.users] };
        default:
            return state;
    }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setusersAC = (users) => ({ type: SET_USERS, users });