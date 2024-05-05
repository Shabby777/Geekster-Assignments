// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingScreen from './Screen/LandingScreen';
import QuoteScreen from './Screen/QuoteScreen';
import FoodScreen from './Screen/FoodScreen';
import Navbar from "./Components/Navbar";
import RestaurantScreen from './Screen/RestaurantScreen';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/quote" element={<QuoteScreen />} />
        {/* <Route path="/restaurant" element={<RestaurantScreen />} /> */}
        <Route path="/foods" element={<FoodScreen />} />
      </Routes>
    </Router>
  );
}

export default App;