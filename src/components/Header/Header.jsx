import React from 'react'
import s from './Header.module.css'

const Header = () => {
  return (
    <div className={s.header}>
      <img className={s.logo} src="https://upload.wikimedia.org/wikipedia/commons/1/1f/LP_2017_logo.png" alt="logo"/>
    </div>
  )
}

export default Header