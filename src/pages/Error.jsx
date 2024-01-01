import { useRouteError, Link } from "react-router-dom";

const Error = () => {
	const error = useRouteError();
	console.log(error, "error");
	if (error.status === 404) {
		return (
			<div className='text-center flex flex-col items-center justify-center marginlr'>
				<img
					src='../404.svg'
					className='mt-20 w-[600px]'
					alt='404 error'
				/>
				<h2 className='text-2xl sm:text-4xl'>Oops!</h2>
				<h4 className='text-base sm:text-lg my-4 mb-8 '>
					page you're looking for doesn't exist or has been moved
				</h4>
				<Link to='/' className='btn '>
					Go back Home
				</Link>
			</div>
		);
	}
	return <div>Error</div>;
};
export default Error;
