import React from "react";
import "./Quote.css";
import Card from './Card';
import data from './data.json';
function Quote(props) {
  return (

      <div className="container">
        {data.map((CurrEle) => {
          return <Card quote={CurrEle.quote} author={CurrEle.author} />;
        })}
      </div>
  );
}

export default Quote;
