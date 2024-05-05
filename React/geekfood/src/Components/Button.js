import React from "react";
import './Button.css'

export const Button = (props) => {
  // console.log(props)
  return <button className='button'
  style={
    { color : props.fontColor, 
    backgroundColor : props.backgroudKaColor,
    borderRadius: props.borderRadius
}
    }>
    {props.children}
    </button>;
};