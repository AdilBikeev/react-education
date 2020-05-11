import React from 'react'
import { textChangeActionCreator, addPostActionCreator } from '../../../../redux/postReducer'
import News from './News';


const NewsContainer = (props) => {
  debugger;
  let state = props.state;

  let changeNewsText = (text) => {
    props.dispatch(textChangeActionCreator(text));
  }

  let addPost = () => {
    let action = addPostActionCreator();
    props.dispatch(action);
  }
  return <News posts={state.posts}
               changeNewsText={changeNewsText}
               addPost={addPost}
               newsText={props.state.newPostText}/>
}

export default NewsContainer;