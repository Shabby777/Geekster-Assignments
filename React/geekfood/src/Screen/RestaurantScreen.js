import React, { useState } from 'react'
import { HotelCard } from '../Components/HotelCard'
// import Imagetext from '../Components/Imagetext'
import hotelData from '../Restaurents.json'
import './RestaurentScreen.css'

const RestaurantScreen = () => {

  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState(hotelData);

  const handleSearch=(e)=>{
    const searchText = e.target.value;
    setQuery(searchText);

    const filtered = hotelData.filter(item=>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filtered);
  }

  // Determine which data to display based on the presence of a search query
  const dataToDisplay = query ? filteredData : hotelData;

  return (


    <>
    <input placeholder='Search results' value={query} onChange={handleSearch}></input>
<div className='rest-container'>

    {dataToDisplay.map((hotel, index)=>{
      return(
        <HotelCard key={index} name={hotel.name} stars={hotel.rating} location={hotel.location} city={hotel.city} type={hotel.type} />
      )
    })}
    </div>
    </>
  )
}

export default RestaurantScreen