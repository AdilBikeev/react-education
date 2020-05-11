const ADD_POST = 'ADD-POST';
const TEXT_CHANGE = 'TEXT-CHANGE';

let initialState = {
  newPostText: 'Success!',
  posts: [
    { id: '1', message: 'Yo guys, how are u?' },
    { id: '2', message: 'This my post from my flat!' },
  ]
}

const postReducer = (state = initialState, action) => {
  if (action.type === ADD_POST) {
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
  return state;
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