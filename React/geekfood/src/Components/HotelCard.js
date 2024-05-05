import React from 'react'
import { Link } from 'react-router-dom'
import './HotelCard.css'
import { Rating } from '@mui/material'
import { MdLocationOn} from 'react-icons/md'
import { IoIosRestaurant } from "react-icons/io";


export const HotelCard = ({
    name, stars, location, type
}) => {

  return (
   <div className='menu-body'>
   
   <div className='menu-container'>
   <div className='top'>
    <h3>{name}</h3>
    {/* <p>{stars}</p> */}
    <Rating value={stars}/>
    <p><MdLocationOn />{location.city}</p>
    
   </div>
   <div className='footer'>
    <h4><IoIosRestaurant size="1.5em"/> <span>{type}</span></h4>
    <Link href="#">Visit Menu</Link>
    </div>
   </div>
   </div>
  )
}