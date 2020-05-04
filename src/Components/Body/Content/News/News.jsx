import React from 'react'
import PostItem from './PostItem'

const News = (props) => {
  debugger
  let posts = props.store._state.posts.map( p => <PostItem id={p.id} message={p.message} /> )

  let textarea = React.createRef()

  let onTextChange = () => {
    let text = textarea.current.value
    props.textChange(text)
  }

  let addPost = () => {
    props.addPost()
  }
  return (
    <div className="">
      <textarea ref={textarea} onChange={onTextChange} placeholder="What's new?" value={props.store._state.newPostText}/> <br/>
      <button onClick={addPost}>publish</button>
      {posts}
    </div>
  )
}

export default News