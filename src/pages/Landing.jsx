import axios from "axios";
import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";

export const loader = async () => {
	const singleDrinkUrl =
		"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
	const searchTerm = "";
	const response = await axios.get(`${singleDrinkUrl}${searchTerm}`);

	return { searchTerm, drinks: response.data.drinks };
};

const Landing = () => {
	const { searchTerm, drinks } = useLoaderData();
	console.log(drinks, "drinks");
	return <CocktailList drinks={drinks} searchTerm={searchTerm} />;
};
export default Landing;
