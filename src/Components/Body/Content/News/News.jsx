import React from 'react'
import PostItem from './PostItem'

const News = (props) => {
  let posts = props.store.state.posts.map( p => <PostItem id={p.id} message={p.message} /> )

  let textarea = React.createRef()

  let onTextChange = () => {
    let text = textarea.current.value
    props.store.state.newPostText = text
    console.log(props.store.state.newPostText)
  }

  let addPost = () => {
    let text = textarea.current.value
    props.addPost(text)
  }

  return (
    <div className="">
      <textarea ref={textarea} onChange={onTextChange} placeholder="What's new?"/> <br/>
      <button onClick={addPost}>publish</button>
      {posts}
    </div>
  )
}

export default News