import React from 'react'
import {Link} from 'react-router-dom'
import './Cart.scss'

const Cart = (props) => {
  const {cartList, handleRemove, handleCheckout} = props

  const loaded = () => {

    let total = "0"

    const cartArr = cartList.map((drink, index) => {
      total -= -drink.price
      return (
        <div className='cart-item'>
          <div className='cart-item-info'>
            <h3>{drink.name}</h3>
            <ul>
              <li>ice: {drink.ice}</li>
              <li>sugar: {drink.sugar}</li>
              <li>topping: {drink.topping}</li>
              <li>size: {drink.size}</li>
            </ul>
          </div>
          <h3 className='item-price'>${drink.price}</h3>
          <h4 onClick={() => handleRemove(index)}>X</h4>
        </div>
      )
    })

    return (
      <div className="cart">
        <h1>Cart</h1>
        <div className='cart-items'>
          {cartArr}
        </div>
        <hr />
        <div className='total'>
          <h3>Total</h3>
          <h3 className='total-price'>${total.toFixed(2)}</h3>
          <p></p>
        </div>
        <Link to='/'>
          <button onClick={handleCheckout}>Checkout</button>
        </Link>
      </div>
    )
  }

  const loading = () => {
    return (
      <div className="cart">
        <h1>Cart</h1>
        <h2>Cart is Empty</h2>
      </div>
    )
  }


  return cartList.length > 0 ? loaded() : loading()
}

export default Cart