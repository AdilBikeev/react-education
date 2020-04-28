import React from 'react'
import PostItem from './PostItem'
import {rerenderEntireTree} from './../../../../index'

const News = (props) => {

  let posts = props.store.posts.map( p => <PostItem id={p.id} message={p.message} /> )

  let textarea = React.createRef()

  let onTextChange = () => {
    let text = textarea.current.value
    props.store.newPostText = text
  }

  let addPost = () => {
    let newPost = {
      id: '3',
      message: textarea.current.value
    }
    props.store.posts.push(newPost)
    textarea.current.value = ''
    rerenderEntireTree()
  }

  return (
    <div className="">
      <textarea ref={textarea} onChange={onTextChange} placeholder="What's new?" name=""/> <br/>
      <button onClick={addPost}>publish</button>
      {posts}
    </div>
  )
}

export default News