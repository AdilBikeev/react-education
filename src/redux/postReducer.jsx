const ADD_POST = 'ADD-POST';
const TEXT_CHANGE = 'TEXT-CHANGE';

const postReducer = (state, action) => {
  debugger;
    if (action.type === ADD_POST) {
      debugger;
        let newPost = {
            id: '3',
            message: state.newPostText,
        }
        if (newPost.message === '') return false
        else {
            state.posts.push(newPost);
            state.newPostText = '';
        }
    } else if (action.type === TEXT_CHANGE) {
        state.newPostText = action.newText;
    }
};

export default postReducer;

export const addPostActionCreator = () => {
    return {
      type: ADD_POST
    }
  };
  
  export const textChangeActionCreator = (text) => {
    return {
      type: TEXT_CHANGE,
      newText: text
    }
  };