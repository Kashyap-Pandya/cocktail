import { Link } from "react-router-dom";

const CocktailCard = ({ alcoholic, name, glass, image, id }) => {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
			<div className='grid grid-col-2 border-red-200 border-2 mt-4'>
				<h1>{name}</h1>
				<h2>{glass}</h2>
				<h2>{alcoholic}</h2>
				<img src={image} alt='' />
				<Link to={`/cocktail/${id}`}>Details</Link>
			</div>
		</div>
	);
};
export default CocktailCard;
