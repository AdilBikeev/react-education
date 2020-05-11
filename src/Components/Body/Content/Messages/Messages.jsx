import React from 'react'
import MessagesItem from './MessagesItem'



const Messages = (props) => {
  let friends = props.state.friends.map( d => <MessagesItem name={d.name} age={d.age} ava={d.ava} />)

  return (
    <div className="">
      {friends}
    </div>
  )
}

export default Messages