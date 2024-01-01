import axios from "axios";
import { useLoaderData } from "react-router-dom";
export const loader = async ({ params }) => {
	const singleCocktailUrl =
		"https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
	const { id } = params;
	const { data } = await axios.get(`${singleCocktailUrl}${id}`);
	return {
		id,
		singleDrink: data.drinks[0],
	};
};
const Cocktail = () => {
	const { id, singleDrink } = useLoaderData();
	console.log(id, singleDrink, "data");
	const {
		strDrink: drink,
		strAlcoholic: alcoholic,
		strGlass: glass,
		strInstructions: instructions,
		strCategory: category,
	} = singleDrink;

	const string = Object.keys(singleDrink);
	console.log(string);
	const filterIngredients = string.filter((item) => {
		return item.startsWith("strIngredient") && singleDrink[item] !== null;
	});
	console.log(filterIngredients);
	const ingredients = filterIngredients.map((item) => singleDrink[item]);
	return (
		<div>
			<h1>{drink}</h1>
			<h1>{category}</h1>
			<h1>{alcoholic}</h1>
			<h1>{glass}</h1>
			<h1>{instructions}</h1>
			<h1>{ingredients}</h1>
		</div>
	);
};
export default Cocktail;
