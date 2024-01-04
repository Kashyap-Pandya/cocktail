import axios from "axios";
import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

export const loader = async ({ request }) => {
	const url = new URL(request.url);
	console.log(url, "url");
	const singleDrinkUrl =
		"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
	const searchTerm = url.searchParams.get("search") || "";
	const response = await axios.get(`${singleDrinkUrl}${searchTerm}`);
	return { searchTerm, drinks: response.data.drinks };
};

const Landing = () => {
	const { searchTerm, drinks } = useLoaderData();
	console.log(drinks, "drinks");
	return (
		<>
			<SearchForm searchTerm={searchTerm} />
			<CocktailList drinks={drinks} searchTerm={searchTerm} />;
		</>
	);
};
export default Landing;
