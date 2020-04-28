import React from 'react'
import s from './MessagesItem.module.css'

const MessagesItem = (props) => {
  return (
    <div className="">
      {props.name}, Age: {props.age} <br/>
      <img className={s.ava} src={props.ava}/>
    </div>
  )
}

export default MessagesItem