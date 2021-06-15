import { useEffect, useState } from "react";
// import Router from "react-router-dom"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import './App.scss';

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
  console.log(fruityData)

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
