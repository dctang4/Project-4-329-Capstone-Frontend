import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "react-bootstrap/Carousel";

import topDrinksData from "../../topDrinksData";
import "./Home.scss";

const Home = (props) => {

  const topDrinks = topDrinksData.map((drink) => {
    return (
      <Link to={`/order/${drink.name}`}>
        <img src={drink.url} alt="fruity drinks" />
      </Link>
    );
  });

  const nextIcon = <span><FontAwesomeIcon icon={['fas', 'angle-right']}/></span>
  const prevIcon = <span><FontAwesomeIcon icon={['fas', 'angle-left']}/></span>


  return (
    <div className="home">
      <h1>FRUITY</h1>
      {/* <img
        src="https://res.cloudinary.com/dvxvez8mj/image/upload/v1623854525/Project%204/unnamed_bi7adn.png"
        alt="fruity drinks"
      /> */}
      <Carousel 
        pause="hover" 
        nextIcon={nextIcon} 
        prevIcon={prevIcon}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dvxvez8mj/image/upload/c_crop,h_785,w_1045/v1624313390/Project%204/Screenshot_from_2021-06-21_17-58-34_bvdlnd.png"
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dvxvez8mj/image/upload/v1623854525/Project%204/unnamed_bi7adn.png"
            alt="Second slide"
          />

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dvxvez8mj/image/upload/c_crop,h_785,w_1045/v1624313383/Project%204/Screenshot_from_2021-06-21_17-58-00_zebum4.png"
            alt="Third slide"
          />

          {/* <Carousel.Caption>
            <h3>New Deal</h3>
            <p>
              3 Years Anniversary! Buy One get One!
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
      <Link to="/order/"><button className='order-now'>Order Now</button></Link>
      <h2>Top Drinks</h2>
      <div className="top-drinks">
        {topDrinks}
      </div>
      <h2>Locations</h2>
      <div className="locations">
        <div className="location">
          <h3>Location 1</h3>
          <p>250 Granite St.</p>
          <p>Braintree, MA 02184</p>
          <p>(781) 308-4362</p>
          <br />
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
          <br />
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
