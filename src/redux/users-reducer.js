const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

let initialState = {
    users: [],
    currentPage: 1,
    countPages: 5,
    totalUsersCount: 2
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
            return { ...state, users: [...action.users] };
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.numberPage };
        default:
            return state;
    }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setCurrentPageAC = (numberPage) => ({ type: SET_CURRENT_PAGE, numberPage });
export const setUsersAC = (users) => ({ type: SET_USERS, users });