import React from 'react'
import {Route} from 'react-router-dom'
import s from './Content.module.css'
import Music from './Music/Music'
import NewsContainer from './News/NewsContainer'
import MessagesContainer from './Messages/MessagsConstainer'

const Content = (props) => {
  return (
    <div className={s.content}>
      <Route path='/news' render={ () => <NewsContainer state={props.state.News} dispatch={props.dispatch} /> } />
      <Route path='/messages' render={ () => <MessagesContainer state={props.state.Messages} dispatch={props.dispatch}/>}  />
      <Route path='/music' render={ () => <Music/>} />
    </div>
  )
}

export default Content