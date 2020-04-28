import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <menu className={s.menu}>
      <NavLink className={s.a} to='/news'>Новости</NavLink>
      <NavLink className={s.a} to='/messages'>Сообщения</NavLink>
      <NavLink className={s.a} to='/music'>Музыка</NavLink>
    </menu>
  )
}

export default Sidebar