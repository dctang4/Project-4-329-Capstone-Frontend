import React from 'react'
import {Link} from 'react-router-dom'

import './Header.scss'

const Header = (props) => {
  return (
    <div className='header'>
      <Link to='/'>
        <h1>FRUITY</h1>
      </Link>
      
      <div className='nav-links'>
        <Link to='/menu'>Menu</Link>
        <Link to='/cart'>Cart</Link>
      </div>
      

    </div>
  )
}

export default Header