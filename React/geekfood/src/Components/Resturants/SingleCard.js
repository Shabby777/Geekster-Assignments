import React from 'react';
import "./SingleCard.css";

function SingleCard(props) {
  let arr=[];
  let arr2=[];
  for(let i=0;i<5;i++){
    if(i<props.rating){
      arr.push(<i class="fa-solid fa-star checked"></i>)
    }
    else{
      arr2.push(<i class="fa-solid fa-star gray"></i>)
    }
  }
  return (
    <div className="SingleCard">
      <div className="part1">
        <div className="heading">
          <p className="hotelName">{props.name}</p>
          <div className="ratingStars">
            {
              arr.map((ele)=> ele)
            }
            {
              arr2.map((ele)=>ele)
            }
          </div>
        </div>
        <div className="location">
          <div className="subLocation">
            <i class="fa-solid fa-location-dot"></i>
            <p>{props.address}</p>
          </div>
          <p>{props.code}</p>
        </div>
      </div>
      <div className="type">
        <div className="foodType">
          <i class="fa-solid fa-utensils"></i>
          <p>{props.cuisine}</p>
        </div>
        <a href="#" className="externalLink">Visit menu</a>
      </div>
    </div>
  );
}

export default SingleCard;
