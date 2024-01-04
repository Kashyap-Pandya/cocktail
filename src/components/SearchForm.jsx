import { Form, useNavigation } from "react-router-dom";

const SearchForm = ({ searchTerm }) => {
	const navigation = useNavigation();
	const isSubmitting = navigation.state === "submitting";
	return (
		<Form className='mx-auto flex justify-center items-center mt-8 p-2 w-[300px] sm:w-[600px] '>
			<input
				type='search'
				name='search'
				className=' w-[200px] sm:w-[300px] p-2 border-2 border-teal-200  active:border-teal-500 '
				defaultValue={searchTerm}
				id='search'
			/>
			<button
				type='submit'
				className='bg-teal-300 m-2 p-2 hover:bg-teal-400'
				disabled={isSubmitting}
			>
				{isSubmitting ? "searching..." : "search"}
			</button>
		</Form>
	);
};
export default SearchForm;
