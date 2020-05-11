import { act } from "react-dom/test-utils";

const TEXT_CHANGE = 'TEXT-CHANGE';
const ADD_POST = 'ADD-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const GET_MSG_FRIEND_BY_ID = 'GET-MSG-FRIEND-BY-ID';
const TEXT_CHANGE_MESSAGE = 'TEXT-CHANGE-MESSAGE';

let store = {
  _state: {
    friends: [
      { id: '0', name: 'Me', age: '21', ava: 'https://avatars.mds.yandex.net/get-pdb/1004345/6df7969a-aa27-4c22-91f0-3058f7461591/s1200' },
      { id: '1', name: 'Andrey', age: '21', ava: 'https://sun9-18.userapi.com/impf/c824410/v824410455/1e101/2s9HDVCzDic.jpg?size=200x0&quality=90&sign=8a726015691cec1d271fa557366c0d42' },
      { id: '2', name: 'Ilya', age: '20', ava: 'https://sun9-32.userapi.com/impf/c850620/v850620935/1adfbe/Q6BQkI8q6dg.jpg?size=200x0&quality=90&sign=7ea3ca38e36b63b7be27d200ebf14fb3' },
      { id: '3', name: 'Emil', age: '21', ava: 'https://sun9-10.userapi.com/impf/c840639/v840639808/8bdff/LEItHWr3qCc.jpg?size=200x0&quality=90&sign=c3f9adcbb7a1bda4c20b013265c6f5fe' },
      { id: '4', name: 'Timur', age: '17', ava: 'https://sun1.ufanet.userapi.com/impg/c858328/v858328243/1b1c5a/SE1h5kxigjA.jpg?size=200x0&quality=90&sign=67e8d1524c3aefc083c78781dad40e7e' },
      { id: '5', name: 'Katya', age: '25', ava: 'https://sun9-39.userapi.com/c206516/v206516083/d72b6/GTSTo8trJrQ.jpg' },
    ],
    messages: [
      {
        id: '0',
        name: 'Me',
        message: 'Hello Piter',
        dateSend: new Date(2020, 5, 11, 11, 15),
      },
      {
        id: '1',
        name: 'Jhohn',
        message: 'Hello',
        dateSend: new Date(2020, 5, 11, 11, 15),
      }
    ],
    posts: [
      { id: '1', message: 'Yo guys, how are u?' },
      { id: '2', message: 'This my post from my flat!' },
    ],
    messageNew: 'Set text',
    newPostText: 'Success!',
  },

  _callSubscriber() {
    console.log('state has changed')
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    debugger;
    if (action.type === ADD_POST) {
      let newPost = {
        id: '3',
        message: this._state.newPostText,
      }
      if (newPost.message === '') return false
      else {
        this._state.posts.push(newPost)
        this._state.newPostText = ''
        this._callSubscriber(this)
      }
    } else if (action.type === TEXT_CHANGE) {
      this._state.newPostText = action.newText
      this._callSubscriber(this)
    } else if (action.type === GET_MSG_FRIEND_BY_ID) {
      this._state.messages.filter(x => x.idFrined === action.idFrined);
    } else if (action.type === TEXT_CHANGE_MESSAGE) {
      this._state.messageNew = action.newText;
      this._callSubscriber(this);
    } else if (action.type === ADD_MESSAGE) {
      debugger;
      this._state.messages.push(action.message);
      this._callSubscriber(this);
    }
  }
};


export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
};

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
    message: {
      id: store._state.messages.length,
      name: 'Me',
      message: store._state.messageNew,
      dateSend: new Date(Date.now())
    }
  };
};

export const textChangeActionCreator = (text) => {
  return {
    type: TEXT_CHANGE,
    newText: text
  }
};

export const textChangeMessageActionCreator = (text) => {
  return {
    type: TEXT_CHANGE_MESSAGE,
    newText: text
  }
};

window.store = store
export default store