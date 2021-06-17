import React from 'react'
import {Link} from 'react-router-dom'

import './Header.scss'

const Header = (props) => {
  const {cartList} = props

  const cartCounter = () => {
    if (cartList.length > 0) {
      return (
        <p className='cart-count'>
          {cartList.length}
        </p>
        )
    } else {
      return (
        <p style={{'display': 'none'}}>0</p>
      )
    }
  }
  const cartCount = cartCounter()

  return (
    <div className='header'>
      <Link to='/'>
        <h1>FRUITY</h1>
      </Link>
      
      <div className='nav-links'>
        {cartCount}
        <Link to='/menu'>Menu</Link>
        <Link to='/cart'>Cart</Link>
      </div>
      

    </div>
  )
}

export default Header