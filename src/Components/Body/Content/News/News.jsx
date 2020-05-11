import React from 'react'
import PostItem from './PostItem'
import {addPostActionCreator, textChangeActionCreator} from "../../../../redux/store";


const News = (props) => {
  let posts = props.state.posts.map( p => <PostItem key={p.id} message={p.message} /> )

  let textarea = React.createRef()

  let onTextChange = () => {
    let text = textarea.current.value
    props.dispatch(textChangeActionCreator(text))
  }

  let addPost = () => {
    let action = addPostActionCreator()
    props.dispatch(action)
  }
  return (
    <div>
      <textarea ref={textarea} onChange={onTextChange} placeholder="What's new?" value={props.state.newPostText}/> <br/>
      <button onClick={addPost}>publish</button>
      {posts}
    </div>
  )
}

export default News