import CocktailCard from "./CocktailCard";
const CocktailList = ({ drinks }) => {
	if (!drinks) {
		return (
			<h2 className='text-center mx-auto flex items-center justify-center h-[100vw] text-red-400 text-lg sm:text-2xl'>
				No matching cocktail found.
			</h2>
		);
	}
	const formattedDrinks = drinks.map((drink) => {
		const { strAlcoholic, strDrink, strGlass, strDrinkThumb, idDrink } =
			drink;

		return {
			alcoholic: strAlcoholic,
			name: strDrink,
			glass: strGlass,
			image: strDrinkThumb,
			id: idDrink,
		};
	});
	return formattedDrinks.map((item) => {
		return <CocktailCard {...item} key={item.id} />;
	});
};
export default CocktailList;
