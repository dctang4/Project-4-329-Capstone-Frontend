import React from "react";
import { Link } from "react-router-dom";
import "./Order.scss";

const Order = (props) => {
  const { fruityData } = props;

  const loaded = () => {
    const filterDrinks = (data, filter) => {
      return data
        .filter((drink) => drink.type === filter)
        .map((drink) => {
          return (
            <div className="order-item">
              <Link to={`/order/${drink.name}`}>
                <h4>{drink.name}</h4>
              </Link>
              <p>{drink.price.split("/")[0]}</p>
              <p>{drink.price.split("/")[1]}</p>
            </div>
          );
        });
    };

    // const fruitTea = fruityData.filter(drink => drink.type === 'Fruit Tea').map(drink =>{
    //   return (
    //     <div className='order-item'>
    //       <Link to={`/order/${drink.name}`}>
    //         <h4>{drink.name}</h4>
    //       </Link>
    //       <p>{drink.price.split('/')[0]}</p>
    //       <p>{drink.price.split('/')[1]}</p>
    //     </div>
    //   )
    // })

    const fruitTea = filterDrinks(fruityData, "Fruit Tea");
    const yakult = filterDrinks(fruityData, "Yakult");
    const milkCap = filterDrinks(fruityData, "Milk Cap");
    const milk = filterDrinks(fruityData, "Milk");
    const smoothie = filterDrinks(fruityData, "Smoothie");
    const milkTea = filterDrinks(fruityData, "Milk Tea");
    const signature = filterDrinks(fruityData, "Signature Smoothie");
    const specialty = filterDrinks(fruityData, "Specialty Drink");
    const freshTea = filterDrinks(fruityData, "Fresh Brewed Tea");

    const click = '{click to order}'

    return (
      <div className="order">
        <h1>Menu</h1>
        <h2>FRESH FRUITY ICED TEA</h2>
        <div className="order-items">
          <div className="sizes">
            <h5>{click}</h5>
            <p>M</p>
            <p>L</p>
          </div>

          {fruitTea}
        </div>
        <h2>
          <span>Yakult</span> DRINK
        </h2>
        <div className="order-items">
          <div className="sizes">
            <h5>{click}</h5>
            <p>M</p>
            <p>L</p>
          </div>

          {yakult}
        </div>
        <h2>MILKCAP</h2>
        <div className="order-items">
          <div className="sizes">
            <h5>{click}</h5>
            <p>M</p>
            <p>L</p>
          </div>

          {milkCap}
        </div>
        <h2>FRESH MILK</h2>
        <div className="order-items">
          <div className="sizes">
            <h5>{click}</h5>
            <p>M</p>
            <p>L</p>
          </div>

          {milk}
        </div>
        <h2>SLUSH/SMOOTHIE</h2>
        <div className="order-items">
          <div className="sizes">
            <h5>{click}</h5>
            <p>M</p>
            <p>L</p>
          </div>

          {smoothie}
        </div>
        <h2>MILK TEA</h2>
        <div className="order-items">
          <div className="sizes">
            <h5>{click}</h5>
            <p>M</p>
            <p>L</p>
          </div>

          {milkTea}
        </div>
        <h2>SIGNATURE SMOOTHIES</h2>
        <div className="order-items">
          <div className="sizes">
            <h5>{click}</h5>
            <p>M</p>
            <p>L</p>
          </div>

          {signature}
        </div>
        <h2>SPECIALTY DRINK</h2>
        <div className="order-items">
          <div className="sizes">
            <h5>{click}</h5>
            <p>M</p>
            <p>L</p>
          </div>

          {specialty}
        </div>
        <h2>FRESH BREWED TEA</h2>
        <div className="order-items">
          <div className="sizes">
            <h5>{click}</h5>
            <p>M</p>
            <p>L</p>
          </div>

          {freshTea}
        </div>
      </div>
    );
  };

  const loading = () => {
    return <h1>Order Loading...</h1>;
  };

  // return (
  // <div className='order'>
  //   <h1>order</h1>

  // </div>
  // )

  return fruityData ? loaded() : loading();
};

export default Order;
