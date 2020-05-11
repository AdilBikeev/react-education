import React from 'react'
import Participant from './Participant'
import s from './Messages.module.css'
import Dialogs from './Dialogs'
import { textChangeMessageActionCreator, addMessageActionCreator } from '../../../../redux/messageReducer'

const Messages = (props) => {
  let friends = props.state.friends.map(d => <Participant
                                                    key={d.ava}
                                                    name={d.name}
                                                    age={d.age}
                                                    ava={d.ava} />);

  let dialogsItem = props.state.messages.map(x => <Dialogs 
                                                          key={x.id}
                                                           name={x.name}
                                                           dateSend={x.dateSend}
                                                           message={x.message} />)
  
  let textAreaMessage = React.createRef();
  
  let OnTextChangeMessage = () => {
    props.dispatch(textChangeMessageActionCreator(textAreaMessage.current.value));
  }

  let AddMessage = () => {
    props.dispatch(addMessageActionCreator());
  }

  return (
    <div className={s.messages}>
      <div className={s.friendsList}>
        {friends}
      </div>
      <div className={s.messagesList}>
        {dialogsItem}
        <textarea ref={textAreaMessage} onChange={OnTextChangeMessage} value={props.state.messageNew}></textarea>
        <button onClick={AddMessage}>Send Message</button>
      </div>
    </div>
  )
}

export default Messages