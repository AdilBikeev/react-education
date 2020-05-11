import React from 'react'
import Participant from './Participant'
import s from './Messages.module.css'
import Dialogs from './Dialogs'

const Messages = (props) => {
  let friends = props.friends.map(d => <Participant
                                                    key={d.ava}
                                                    name={d.name}
                                                    age={d.age}
                                                    ava={d.ava} />);

  let dialogsItem = props.messages.map(x => <Dialogs 
                                                    key={x.id}
                                                    name={x.name}
                                                    dateSend={x.dateSend}
                                                    message={x.message} />);

  let textAreaMessage = React.createRef();
  
  let OnTextChangeMessage = () => {
    props.textChangeMessage(textAreaMessage.current.value);
  }

  let AddMessage = () => {
    props.addMessage();
  }

  return (
    <div className={s.messages}>
      <div className={s.friendsList}>
        {friends}
      </div>
      <div className={s.messagesList}>
        {dialogsItem}
        <textarea ref={textAreaMessage} onChange={OnTextChangeMessage} value={props.message}></textarea>
        <button onClick={AddMessage}>Send Message</button>
      </div>
    </div>
  )
}

export default Messages