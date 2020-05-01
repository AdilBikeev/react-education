import {rerenderEntireTree} from '../render'
let store = {
  state: {
    friends: [
    {id: '1', name: 'Andrey', age: '21', ava: 'https://sun9-18.userapi.com/impf/c824410/v824410455/1e101/2s9HDVCzDic.jpg?size=200x0&quality=90&sign=8a726015691cec1d271fa557366c0d42'},
    {id: '2', name: 'Ilya', age: '20', ava: 'https://sun9-32.userapi.com/impf/c850620/v850620935/1adfbe/Q6BQkI8q6dg.jpg?size=200x0&quality=90&sign=7ea3ca38e36b63b7be27d200ebf14fb3'},
    {id: '3', name: 'Emil', age: '21', ava: 'https://sun9-10.userapi.com/impf/c840639/v840639808/8bdff/LEItHWr3qCc.jpg?size=200x0&quality=90&sign=c3f9adcbb7a1bda4c20b013265c6f5fe'},
    {id: '4', name: 'Timur', age: '17', ava: 'https://sun1.ufanet.userapi.com/impg/c858328/v858328243/1b1c5a/SE1h5kxigjA.jpg?size=200x0&quality=90&sign=67e8d1524c3aefc083c78781dad40e7e'},
    {id: '5', name: 'Katya', age: '25', ava: 'https://sun9-39.userapi.com/c206516/v206516083/d72b6/GTSTo8trJrQ.jpg'},
    ],
    posts: [
      {id: '1', message: 'Yo guys, how are u?'},
      {id: '2', message: 'This my post from my flat!'},
    ],
    newPostText: '',
  },
}

export let addPost = (newPostText) => {
  let newPost = {
    id: '3',
    message: newPostText,
  }
  store.state.posts.push(newPost)
  store.state.newPostText = ''
  rerenderEntireTree(store)
}

export let updateNewPostText = (newPost) => {
  store.newPostText = newPost;
  rerenderEntireTree(store);
}

window.store = store
export default store