import React from 'react'
import s from './PostItem.module.css'

const PostItem = (props) => {
  return (
    <div className="">
      <div className={s.post}>
        Post id: {props.id} <br/>
        Post message: {props.message}
      </div>
    </div>
  )
}

export default PostItem