import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import Recipe from '../Components/Recipe';

const FoodScreen = () => {
//   // State to hold the recipe data
//   const [recipes, setRecipes] = useState([]);

//   // Function to fetch recipes
//   const fetchRecipes = async () => {
//     const url = 'https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken%20soup';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '754a265ba9mshfd05fff82906f21p187a20jsn1735a8cee9f4',
// 		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
// 	}
// };


// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }  };

//   // Fetch recipes when component mounts
//   useEffect(() => {
//     fetchRecipes();
    
//   }, []);

//   return (
//     <>
//       {/* Map through recipes and render Recipe component for each */}
//       {recipes.map(recipe => (
//         <Recipe key={recipe.id} recipe={recipe} />
//       ))}
//     </>
//   );
return(
  <>
  <h1> Recipe</h1>
  </>
)
};

export default FoodScreen;