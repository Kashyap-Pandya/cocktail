import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
const HomeLayout = () => {
	const navigation = useNavigation();
	const isPageLoading = navigation.state === "loading";

	return (
		<div>
			<Navbar />
			{isPageLoading ? (
				<div className='flex items-center justify-center h-[100vh]'>
					<span className='loader text-center' />
				</div>
			) : (
				<Outlet />
			)}
		</div>
	);
};
export default HomeLayout;
