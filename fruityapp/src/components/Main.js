import React, {useState} from 'react'
import {Route, Switch} from 'react-router-dom'
import './Main.scss'

import Home from './pages/Home'
import Menu from './pages/Menu'
import Drink from './pages/Drink'
import Cart from './pages/Cart'

const Main = (props) => {
  const {fruityData, handleAdd} = props

  return (
    <div className='main'>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/menu'>
          <Menu fruityData={fruityData}/>
        </Route>
        <Route 
          exact path='/menu/:drink'
          render={(rp) =>
            <Drink 
              {...rp}
              handleAdd={handleAdd}
            />
          }
        />
        <Route exact path='/cart'>
          <Cart />
        </Route>
      </Switch>
    </div>
  )
}

export default Main