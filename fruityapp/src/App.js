import { useEffect, useState } from "react";
// import Router from "react-router-dom"
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import './App.scss';

import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

function App() {
  // backend api url
  const url = 'https://fruity-api.herokuapp.com/drinks/'


  // fruityData will store the data in drinks data in an array
  const [fruityData, setFruityData] = useState(null)

  const getData = async () => {
    const resp = await fetch(url);
    const data = await resp.json()
    const newData = data.map(drink => {
      return {
        "pk": drink.pk,
        ...drink.fields
      }
    })
    setFruityData(newData)
  }

  useEffect(() => {getData()}, [])
  // console.log(fruityData)

  const [cartList, setCartList] = useState([])

  const handleAdd = (drink, price, selection) => {
    setCartList([
      ...cartList, 
      {
        "name": drink.name, 
        "price": price,
        ...selection
      }
    ])
  }

  const handleRemove = (index) => {
    setCartList(cartList.filter((drink, i) => i !== index))
  }

  const handleCheckout = () => {
    setCartList([])
    alert("Your order has been recieved! Thank You for Your Patronage!")
  }

  return (
    <div className="App">
      <Header cartList={cartList}/>
      <Main 
        fruityData={fruityData}
        cartList={cartList}
        handleAdd={handleAdd}
        handleRemove={handleRemove}
        handleCheckout={handleCheckout}
      />
      <Footer />
    </div>
  );
}

export default App;
