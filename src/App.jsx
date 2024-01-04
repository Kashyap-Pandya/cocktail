import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { loader as LandingLoader } from "./pages/Landing";
import { loader as singleCocktailLoader } from "./pages/Cocktail";
import { About, Cocktail, Landing, Error, HomeLayout } from "./pages";
import SinglePageError from "./components/SinglePageError";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Landing />,
				loader: LandingLoader,
				errorElement: <SinglePageError />,
			},
			{
				path: "cocktail/:id",
				element: <Cocktail />,
				loader: singleCocktailLoader,
				errorElement: <SinglePageError />,
			},

			{
				path: "/about",
				element: <About />,
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};
export default App;
