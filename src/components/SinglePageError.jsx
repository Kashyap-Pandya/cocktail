import { useRouteError } from "react-router-dom";

const SinglePageError = () => {
	const error = useRouteError();
	return (
		<div className='text-center mx-auto flex items-center justify-center h-[100vw] text-red-400 text-lg sm:text-2xl'>
			{error.message}
		</div>
	);
};
export default SinglePageError;
