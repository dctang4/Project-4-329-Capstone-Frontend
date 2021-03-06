import React, { useEffect, useState } from "react";
import selectionsData from "../../selectionsData.js";
import "./Drink.scss";

const Drink = (props) => {
  const { history, match, handleAdd } = props;

  const [drinkData, setDrinkData] = useState(null);
  const [selections, setSelections] = useState({
    ice: "100% - Regular",
    sugar: "100% - Regular",
    topping: "None",
    size: "M - Medium",
    comments: ""
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

    const itemPrice = () => {
      if (selections.size === "M - Medium") {
        if (selections.topping !== 'None') {
          const cost = (parseFloat(drinkData.price.split("/")[0]) + 0.50).toFixed(2)
          return cost
        } else {
          return drinkData.price.split("/")[0];
        }
      } else {
        if (selections.topping !== 'None') {
          const cost = (parseFloat(drinkData.price.split("/")[1]) + 0.50).toFixed(2)
          return cost
        } else {
          return drinkData.price.split("/")[1];
        }
      }
    };

    const price = itemPrice();

    const handleSubmit = (event) => {
      event.preventDefault();
      if (price !== 'NA' && price !== 'NaN') {
        handleAdd(drinkData, price, selections);
      }
    };

    const back = "<< Back"

    return (
      <div className="drink">
        <p 
          className='back'
          onClick={() => history.push('/order/')}
        >{back}</p>
        <h1>{drinkData.name}</h1>
        <div className="drink-info">
          <h2>
            Type: <span>{drinkData.type}</span>
          </h2>
          <h2>
            Info: <span>{drinkData.info}</span>
          </h2>
        </div>
        <form className="selections" onSubmit={handleSubmit}>
          <div className="selection-options">
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
          <h3>Comments <span className='max-char'>(characters left: {100-selections.comments.length})</span></h3>
          <textarea 
            placeholder='comments' 
            name="comments"
            maxLength={100}
            value={selections.comments}
            onChange={handleChange}
          />
          <h3>
            Price: <span>${price}</span>
          </h3>
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
