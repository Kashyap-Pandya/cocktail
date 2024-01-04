import { Link } from "react-router-dom";

const CocktailCard = ({ alcoholic, name, glass, image, id }) => {
	return (
		<div>
			<div className='flex flex-col justify-center items-center gap-2 p-8 bg-gray-100 fontColor mt-8 rounded-md'>
				<h1 className='font-semibold '>
					<span className='m-1 text-lg sm:text-xl'>{name}</span>
				</h1>
				<h2 className=''>
					<span className='m-1 '>{glass}</span>
				</h2>{" "}
				<h2 className='italic'>
					<span className='m-1 '>{alcoholic}</span>
				</h2>
				<img src={image} alt='' className='w-[300px] rounded-md mt-2' />
				<Link
					to={`/cocktail/${id}`}
					className=' bg-teal-300 rounded-md p-2 mt-4 hover:bg-teal-400'
				>
					Details
				</Link>
			</div>
		</div>
	);
};
export default CocktailCard;
