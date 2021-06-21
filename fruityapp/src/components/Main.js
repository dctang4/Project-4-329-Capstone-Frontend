import React from 'react'
import {Route, Switch} from 'react-router-dom'
import './Main.scss'

import Home from './pages/Home'
import Order from './pages/Order'
import Drink from './pages/Drink'
import Cart from './pages/Cart'

const Main = (props) => {
  const {fruityData, cartList, handleAdd, handleRemove, handleCheckout} = props

  return (
    <div className='main'>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/order'>
          <Order fruityData={fruityData}/>
        </Route>
        <Route 
          exact path='/order/:drink'
          render={(rp) =>
            <Drink 
              {...rp}
              handleAdd={handleAdd}
            />
          }
        />
        <Route exact path='/cart'>
          <Cart 
            cartList={cartList}
            handleRemove={handleRemove}
            handleCheckout={handleCheckout}
          />
        </Route>
      </Switch>
    </div>
  )
}

export default Main