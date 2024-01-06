import axios from "axios";
import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import { useQuery } from "@tanstack/react-query";

const singleDrinkUrl =
	"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const searchCocktailsQuery = (searchTerm) => {
	return {
		queryKey: ["search", searchTerm || "all"],
		queryFn: async () => {
			const response = await axios.get(`${singleDrinkUrl}${searchTerm}`);
			return response.data.drinks;
		},
	};
};

export const loader =
	(queryClient) =>
	async ({ request }) => {
		const url = new URL(request.url);
		console.log(url, "url");
		const searchTerm = url.searchParams.get("search") || "";
		await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
		return { searchTerm };
	};
// drinks: response.data.drinks
const Landing = () => {
	const { searchTerm } = useLoaderData();
	const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm));
	// console.log(drinks, "drinks");
	return (
		<>
			<SearchForm searchTerm={searchTerm} />
			<CocktailList drinks={drinks} searchTerm={searchTerm} />;
		</>
	);
};
export default Landing;
