import React from 'react'
import PostItem from './PostItem'

const News = (props) => {
  debugger;
  let posts = props.News.posts.map( p => <PostItem key={p.id} message={p.message} /> )

  let textarea = React.createRef()

  let onTextChange = () => {
    let text = textarea.current.value
    props.changeNewsText(text)
  }

  let addPost = () => {
    props.addPost();
  }

  return (
    <div>
      <textarea ref={textarea} 
                onChange={onTextChange} 
                placeholder="What's new?" 
                value={props.News.newPostText}/> <br/>
      <button onClick={addPost}>publish</button>
      {posts}
    </div>
  )
}

export default News