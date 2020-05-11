import React from 'react'
import { textChangeMessageActionCreator, addMessageActionCreator } from '../../../../redux/messageReducer'
import Messages from './Messages'

const MessagesContainer = (props) => {
  let state = props.state;

  let OnTextChangeMessage = (text) => {
    props.dispatch(textChangeMessageActionCreator(text));
  }

  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  }

  return <Messages 
                  friends={state.friends}
                  messages={state.messages}
                  textChangeMessage={OnTextChangeMessage}
                  addMessage={addMessage}/>;
};

export default MessagesContainer;