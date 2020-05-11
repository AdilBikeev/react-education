import React from 'react'
import {Route} from 'react-router-dom'
import s from './Content.module.css'
import News from './News/News'
import Messages from './Messages/Messages'
import Music from './Music/Music'

const Content = (props) => {
  debugger;
  return (
    <div className={s.content}>
      <Route path='/news' render={ () => <News state={props.state.News} dispatch={props.dispatch} /> } />
      <Route path='/messages' render={ () => <Messages state={props.state.Messages} dispatch={props.dispatch}/>}  />
      <Route path='/music' render={ () => <Music/>} />
    </div>
  )
}

export default Content