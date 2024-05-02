import React from "react";
import "./Resturant.css";
import { useState } from "react";
import data from "./data.json";
import SingleCard from "./SingleCard";
function Resturant(props) {
  let Search = "";
  let rating = 0;
  let [filter, setFilter] = useState(data);
  function getUserInput(ele) {
    if (ele.target.id === "search") {
      Search = ele.target.value;
    } else if (ele.target.id === "rating") {
      rating = ele.target.value;
    }
    let filteredData = data.filter((ele) => {
      return (
        ele.name.toLowerCase().includes(Search.toLowerCase()) &&
        parseInt(ele.rating) >= parseInt(rating)
      );
    });
    setFilter(filteredData);
  }

  return (
    <div className="container">
      <div className="ResturantSection1">
        <input
          type="text"
          placeholder="Search restaurants..."
          id="search"
          onChange={getUserInput}
        />
        <div className="ratingvise">
          <p>Minimum Rating: </p>
          <input
            type="number"
            placeholder="0"
            id="rating"
            onChange={getUserInput}
          />
        </div>
      </div>
      <div className="section2">
        {filter.map((ele) => {
          return (
            <SingleCard
              code={ele.code}
              name={ele.name}
              address={ele.address}
              rating={ele.rating}
              cuisine={ele.cuisine}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Resturant;
