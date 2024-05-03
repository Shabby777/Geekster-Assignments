import React from "react";
// import './Button.css'

export const Button = (props) => {
  // console.log(props)
  return <button className='button'
  style={
    {backgroundColor: "rgb(159, 12, 35)",
    opacity:"0.88",
    color:"white",
    padding:"10px 15px",
    border:"1px solid white",
    textTransform:"uppercase",
    fontFamily:"'Times New Roman', Times, serif"
  }
  }
 >
    {props.children}
    </button>;
};
