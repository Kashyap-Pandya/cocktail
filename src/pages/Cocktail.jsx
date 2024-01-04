// import axios from "axios";
// import { Link, useLoaderData } from "react-router-dom";
// export const loader = async ({ params }) => {
// 	const singleCocktailUrl =
// 		"https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
// 	const { id } = params;
// 	const { data } = await axios.get(`${singleCocktailUrl}${id}`);
// 	return {
// 		id,
// 		data,
// 	};
// };
// const Cocktail = () => {
// 	const { id, data } = useLoaderData();

// 	if (!data) {
// 		return (
// 			<div className='text-center  flex flex-col justify-center h-[100vw]'>
// 				<h3 className=' text-red-400 text-lg sm:text-2xl'>
// 					ID doesn't match to any drinks.{" "}
// 				</h3>
// 				<Link to='/' className='btn w-[200px] mx-auto mt-4'>
// 					Back To Home{" "}
// 				</Link>
// 			</div>
// 		);
// 	}
// 	const singleDrink = data.drinks[0];
// 	const {
// 		strDrink: drink,
// 		strAlcoholic: alcoholic,
// 		strGlass: glass,
// 		strInstructions: instructions,
// 		strCategory: category,
// 	} = singleDrink;

// 	const string = Object.keys(singleDrink);
// 	console.log(string);
// 	const filterIngredients = string.filter((item) => {
// 		return item.startsWith("strIngredient") && singleDrink[item] !== null;
// 	});
// 	console.log(filterIngredients);
// 	const ingredients = filterIngredients.map((item) => singleDrink[item]);
// 	console.log(ingredients);
// 	return (
// 		<div className='flex flex-col items-center justify-center mx-auto '>
// 			<h1 className='m-2'>
// 				Name <span className='p-4'>{drink}</span>
// 			</h1>
// 			<h1 className='m-2'>
// 				Alcoholic <span>{alcoholic}</span>
// 			</h1>
// 			<h1 className='m-2'>
// 				Glass <span>{glass}</span>
// 			</h1>
// 			<h1 className='m-2'>
// 				Category <span>{category}</span>
// 			</h1>

// 			<h1 className='m-2'>
// 				{" "}
// 				Ingredients
// 				<span className=''>
// 					{ingredients.map((item, index) => {
// 						return (
// 							<div key={item}>
// 								{item} {index < ingredients.length - 1 && ","}
// 							</div>
// 						);
// 					})}
// 				</span>
// 			</h1>
// 			<h1 className='m-2'>
// 				Instructions <span>{instructions}</span>
// 			</h1>
// 		</div>
// 	);
// };
// export default Cocktail;

import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";

export const loader = async ({ params }) => {
	const singleCocktailUrl =
		"https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
	const { id } = params;
	const { data } = await axios.get(`${singleCocktailUrl}${id}`);
	return {
		id,
		data,
	};
};

const Cocktail = () => {
	const { id, data } = useLoaderData();

	if (!data) {
		return (
			<div className='text-center flex flex-col justify-center h-[100vw]'>
				<h3 className='text-red-400 text-lg sm:text-2xl'>
					ID doesn't match any drinks.
				</h3>
				<Link to='/' className='btn w-[200px] mx-auto mt-4'>
					Back To Home
				</Link>
			</div>
		);
	}

	const singleDrink = data.drinks[0];
	const {
		strDrink: drink,
		strAlcoholic: alcoholic,
		strGlass: glass,
		strInstructions: instructions,
		strCategory: category,
	} = singleDrink;

	const string = Object.keys(singleDrink);
	const filterIngredients = string.filter(
		(item) => item.startsWith("strIngredient") && singleDrink[item] !== null
	);
	const ingredients = filterIngredients.map((item) => singleDrink[item]);

	return (
		<div className='mx-auto bg-gray-50 p-4 w-[300px] sm:w-[600px] mt-6'>
			<div className='flex flex-col gap-4 justify-around fontColor '>
				<div className='m-2 flex'>
					<h1 className=' font-medium mr-2 card'>Name:</h1>
					<span>{drink}</span>
				</div>
				<div className='m-2 flex'>
					<h1 className=' font-medium mr-2'>Alcoholic:</h1>
					<span>{alcoholic}</span>
				</div>
				<div className='m-2 flex'>
					<h1 className=' font-medium mr-2'>Glass:</h1>
					<span>{glass}</span>
				</div>
				<div className='m-2 flex'>
					<h1 className=' font-medium mr-2'>Category:</h1>
					<span>{category}</span>
				</div>
				<div className='m-2 flex'>
					<h1 className=' font-medium mr-2'>Ingredients:</h1>
					<span>
						{ingredients.map((item, index) => (
							<div key={item} className='flex items-center'>
								{item} {index < ingredients.length - 1 && ","}
							</div>
						))}
					</span>
				</div>
				<div className='m-2 flex'>
					<h1 className=' font-medium mr-2'>Instructions:</h1>
					<span>{instructions}</span>
				</div>
			</div>
		</div>
	);
};

export default Cocktail;
