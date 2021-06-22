import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import SplitButton from "react-bootstrap/SplitButton";

import "./Header.scss";

const Header = (props) => {
  const { cartList } = props;

  const cartCounter = () => {
    if (cartList.length > 0) {
      return <p className="cart-count">{cartList.length}</p>;
    } else {
      return <p style={{ display: "none" }}>0</p>;
    }
  };
  const cartCount = cartCounter();

  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <div className="header">
      <Link to="/">
        <h1>FRUITY</h1>
      </Link>

      <div className="nav-links">
        {cartCount}
        {/* <Link to="/order">Order</Link> */}
        <Dropdown as={ButtonGroup}>
          <Link to="/order">
            <p id="order-link">Order</p>
          </Link>

          <Dropdown.Toggle split variant="success" id="toggle" />
          <Dropdown.Menu>
            <Dropdown.Item href="#fruit-tea">fruit tea</Dropdown.Item>
            <Dropdown.Item href="#yakult">yakult</Dropdown.Item>
            <Dropdown.Item href="#milkcap">milkcap</Dropdown.Item>
            <Dropdown.Item href="#milk">milk</Dropdown.Item>
            <Dropdown.Item href="#smoothie">smoothie</Dropdown.Item>
            <Dropdown.Item href="#milk-tea">milk tea</Dropdown.Item>
            <Dropdown.Item href="#signature-smoothie">
              signature smoothie
            </Dropdown.Item>
            <Dropdown.Item href="#specialty-drink">
              specialty drink
            </Dropdown.Item>
            <Dropdown.Item href="#fresh-brewed-tea">
              fresh brewed tea
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Link to="/cart">
          <FontAwesomeIcon
            className="cart-icon"
            icon={["fas", "shopping-cart"]}
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
