import React from "react";
import {Link} from "react-router-dom"
import "./Home.scss";

const Home = (props) => {
  const imgUrl = [
    "https://res.cloudinary.com/dvxvez8mj/image/upload/c_crop,h_1000,w_400,x_0/v1624292808/Project%204/o_ueywdq.jpg", 
    "https://res.cloudinary.com/dvxvez8mj/image/upload/c_crop,h_1000,w_400,x_400/v1624292808/Project%204/o_ueywdq.jpg", 
    "https://res.cloudinary.com/dvxvez8mj/image/upload/c_crop,h_1000,w_400,x_0/v1623855217/Project%204/o_3_phk48b.jpg", 
    "https://res.cloudinary.com/dvxvez8mj/image/upload/c_crop,h_1000,w_400,x_400/v1623855217/Project%204/o_3_phk48b.jpg", 
    "https://res.cloudinary.com/dvxvez8mj/image/upload/c_crop,h_1000,w_333,x_0,y_167/v1623857687/Project%204/o_2_tz69vx.jpg",
    "https://res.cloudinary.com/dvxvez8mj/image/upload/c_crop,h_1000,w_333,x_333,y_167/v1623857687/Project%204/o_2_tz69vx.jpg",
    "https://res.cloudinary.com/dvxvez8mj/image/upload/c_crop,h_1000,w_400,x_0/v1623855217/Project%204/o_1_bl5qad.jpg", 
    "https://res.cloudinary.com/dvxvez8mj/image/upload/c_crop,h_1000,w_400,x_400/v1623855217/Project%204/o_1_bl5qad.jpg"
  ]

  const topDrinksName = ["Fire Dragon", "Strawberry Mango", "Lime Tea", "Lemon Tea", "Strawberry Lemon", "Refreshing Mango", "Yellow Combo", "Grapefruit Limon"]

  const topDrinks = imgUrl.map((img, index) => {
    return (
      <Link to={`/order/${topDrinksName[index]}`} >
        <img src={img} alt="fruity drinks" />
      </ Link>
    )
  }) 


  return (
    <div className="home">
      <h1>FRUITY</h1>
      <img
        src="https://res.cloudinary.com/dvxvez8mj/image/upload/v1623854525/Project%204/unnamed_bi7adn.png"
        alt="fruity drinks"
      />
      <h2>Top Drinks</h2>
      <div className="top-drinks">
        {topDrinks}
        {/* <img
          src="https://res.cloudinary.com/dvxvez8mj/image/upload/v1623855217/Project%204/o_ueywdq.jpg"
          alt="fruity drinks"
        />
        <img
          src="https://res.cloudinary.com/dvxvez8mj/image/upload/v1623855217/Project%204/o_3_phk48b.jpg"
          alt="fruity drinks"
        />
        <img
          src="https://res.cloudinary.com/dvxvez8mj/image/upload/c_crop,h_1000,q_100,y_168/v1623857687/Project%204/o_2_tz69vx.jpg"
          alt="fruity drinks"
        />
        <img
          src="https://res.cloudinary.com/dvxvez8mj/image/upload/v1623855217/Project%204/o_1_bl5qad.jpg"
          alt="fruity drinks"
        /> */}
      </div>
      <h2>Locations</h2>
      <div className="locations">
        <div className="location">
          <h3>Location 1</h3>
          <p>250 Granite St.</p>
          <p>Braintree, MA 02184</p>
          <p>(781) 308-4362</p>
          <br/>
          <h3>Hours</h3>
          <div className="hours">
            <ul>
              <li>Monday</li>
              <li>Tuesday</li>
              <li>Wednesday</li>
              <li>Thursday</li>
              <li>Friday</li>
              <li>Saturday</li>
              <li>Sunday</li>
            </ul>
            <ul>
              <li>11AM - 7PM</li>
              <li>11AM - 7PM</li>
              <li>11AM - 7PM</li>
              <li>11AM - 7PM</li>
              <li>11AM - 8PM</li>
              <li>11AM - 8PM</li>
              <li>12pm - 6PM</li>
            </ul>
          </div>
        </div>
        <div className="location">
          <h3>Location 2</h3>
          <p>77 Harvard Ave</p>
          <p>Allston, MA 02134</p>
          <p>(617) 208-8848</p>
          <br/>
          <h3>Hours</h3>
          <div className="hours">
            <ul>
              <li>Monday</li>
              <li>Tuesday</li>
              <li>Wednesday</li>
              <li>Thursday</li>
              <li>Friday</li>
              <li>Saturday</li>
              <li>Sunday</li>
            </ul>
            <ul>
              <li>11AM - 9PM</li>
              <li>11AM - 9PM</li>
              <li>11AM - 9PM</li>
              <li>11AM - 9PM</li>
              <li>11AM - 9PM</li>
              <li>11AM - 9PM</li>
              <li>11AM - 9PM</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
