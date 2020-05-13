const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    photo: null,
    fullName: '',
    newPostText: 'it-kamasutra.com',
    isFetching: true
};

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {

            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        case TOGGLE_IS_FETCHING: {
            let stateCopy = {...state};
            stateCopy.isFetching = action.isFetching;
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.photo = action.profile.photo;
            stateCopy.fullName = action.profile.fullName;
            debugger
            return stateCopy;
        }
        default:
            return state;
    }
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile}) 
export const toggleIsFething = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching}) 

export default profileReducer;