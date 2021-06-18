import React from 'react'
import {Link} from 'react-router-dom'
import './Menu.scss'

const Menu = (props) => {
  const {fruityData} = props

  const loaded = () => {

    const filterDrinks = (data, filter) => {
      return data.filter(drink => drink.type === filter).map(drink => {
        return (
          <div className='menu-item'>
            <Link to={`/menu/${drink.name}`}>
              <h4>{drink.name}</h4>
            </Link>
            <p>{drink.price.split('/')[0]}</p>
            <p>{drink.price.split('/')[1]}</p>
          </div>
        )
      })
    }

    // const fruitTea = fruityData.filter(drink => drink.type === 'Fruit Tea').map(drink =>{
    //   return (
    //     <div className='menu-item'>
    //       <Link to={`/menu/${drink.name}`}>
    //         <h4>{drink.name}</h4>
    //       </Link>
    //       <p>{drink.price.split('/')[0]}</p>
    //       <p>{drink.price.split('/')[1]}</p>
    //     </div>
    //   )
    // })

    const fruitTea = filterDrinks(fruityData, 'Fruit Tea')
    const yakult = filterDrinks(fruityData, 'Yakult')
    const milkCap = filterDrinks(fruityData, 'Milk Cap')
    const milk = filterDrinks(fruityData, 'Milk')
    const smoothie = filterDrinks(fruityData, 'Smoothie')
    const milkTea = filterDrinks(fruityData, 'Milk Tea')
    const signature = filterDrinks(fruityData, 'Signature Smoothie')
    const specialty = filterDrinks(fruityData, 'Specialty Drink')
    const freshTea = filterDrinks(fruityData, 'Fresh Brewed Tea')

    return (
      <div className='menu'>
        <h1>Menu</h1>
        <h2>FRESH FRUITY ICED TEA</h2>
        <div className='sizes'>
          <br></br>
          <p>M</p>
          <p>L</p>
        </div>
        {fruitTea}
        <h2><span>Yakult</span> DRINK</h2>
        <div className='sizes'>
          <br></br>
          <p>M</p>
          <p>L</p>
        </div>
        {yakult}
        <h2>MILKCAP</h2>
        <div className='sizes'>
          <br></br>
          <p>M</p>
          <p>L</p>
        </div>
        {milkCap}
        <h2>FRESH MILK</h2>
        <div className='sizes'>
          <br></br>
          <p>M</p>
          <p>L</p>
        </div>
        {milk}
        <h2>SLUSH/SMOOTHIE</h2>
        <div className='sizes'>
          <br></br>
          <p>M</p>
          <p>L</p>
        </div>
        {smoothie}
        <h2>MILK TEA</h2>
        <div className='sizes'>
          <br></br>
          <p>M</p>
          <p>L</p>
        </div>
        {milkTea}
        <h2>SIGNATURE SMOOTHIES</h2>
        <div className='sizes'>
          <br></br>
          <p>M</p>
          <p>L</p>
        </div>
        {signature}
        <h2>SPECIALTY DRINK</h2>
        <div className='sizes'>
          <br></br>
          <p>M</p>
          <p>L</p>
        </div>
        {specialty}
        <h2>FRESH BREWED TEA</h2>
        <div className='sizes'>
          <br></br>
          <p>M</p>
          <p>L</p>
        </div>
        {freshTea}
      </div>
    )
  }

  const loading = () => {
    return <h1>Menu Loading...</h1>
  }

  // return (
  // <div className='menu'>
  //   <h1>Menu</h1>

  // </div>
  // )

  return fruityData ? loaded() : loading()
}

export default Menu