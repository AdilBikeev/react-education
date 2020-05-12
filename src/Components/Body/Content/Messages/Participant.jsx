import React from 'react'
import s from './Participant.module.css'

const Participant = (props) => {
  return (
    <div className={s.participant}>
      {props.name}, Age: {props.age} <br/>
      <img alt={props.name} className={s.ava} src={props.ava}/>
    </div>
  )
}

export default Participant