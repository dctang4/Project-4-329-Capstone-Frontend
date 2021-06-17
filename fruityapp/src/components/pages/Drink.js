import React, { useEffect, useState } from "react";
import selectionsData from "../../selectionsData.js";
import "./Drink.scss";

const Drink = (props) => {
  const { match, handleAdd } = props;

  const [drinkData, setDrinkData] = useState(null);
  const [selections, setSelections] = useState({
    ice: "100% - Regular",
    sugar: "100% - Regular",
    topping: "None",
    size: "M - Medium",
  });

  const getData = async () => {
    const resp = await fetch(
      `https://fruity-api.herokuapp.com/drinks/${match.params.drink}`
    );
    const data = await resp.json();
    // console.log("info", data);
    const newData = {
      pk: data[0].pk,
      ...data[0].fields,
    };
    // console.log("newData", newData);
    setDrinkData(newData);
  };

  useEffect(() => getData(), []);

  const options = (arr) => {
    const optionsArr = arr.map((item, index) => {
      return (
        <option value={item} key={index}>
          {item}
        </option>
      );
    });
    return <>{optionsArr}</>;
  };

  // console.log('selectionsData', selectionsData.ice)
  // console.log('selections', selections.ice)

  const loaded = () => {
    const handleChange = (event) => {
      const name = event.target.name;
      setSelections({
        ...selections,
        [name]: event.target.value,
      });
    };

    const handleSubmit = (event) => {
      event.preventDefault()
      handleAdd(drinkData, selections)
    }

    return (
      <div className="drink">
        <h1>{drinkData.name}</h1>
        <div className="drink-info">
          <h2>Type: <span>{drinkData.type}</span></h2>
          <h2>Info: <span>{drinkData.info}</span></h2>
        </div>
        <form
          className="selections"
          onSubmit={handleSubmit}
        >
          <div className='selection-options'>
            <label>
              <h3>Ice Level</h3>
              <select name="ice" value={selections.ice} onChange={handleChange}>
                {options(selectionsData.ice)}
              </select>
            </label>
            <label>
              <h3>Sugar Level</h3>
              <select
                name="sugar"
                value={selections.sugar}
                onChange={handleChange}
              >
                {options(selectionsData.sugar)}
              </select>
            </label>
            <label>
              <h3>Topping</h3>
              <select
                name="topping"
                value={selections.topping}
                onChange={handleChange}
              >
                {options(selectionsData.topping)}
              </select>
            </label>
            <label>
              <h3>Size</h3>
              <select
                name="size"
                value={selections.size}
                onChange={handleChange}
              >
                {options(selectionsData.size)}
              </select>
            </label>
          </div>
          <input type="submit" value="Add to Cart" />
        </form>
      </div>
    );
  };

  const loading = () => {
    return <h1>Drink Info Loading...</h1>;
  };

  return drinkData ? loaded() : loading();
};

export default Drink;
