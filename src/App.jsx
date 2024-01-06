import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { loader as LandingLoader } from "./pages/Landing";
import { loader as singleCocktailLoader } from "./pages/Cocktail";
import { About, Cocktail, Landing, Error, HomeLayout } from "./pages";
import SinglePageError from "./components/SinglePageError";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5,
		},
	},
});

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Landing />,
				loader: LandingLoader(queryClient),
				errorElement: <SinglePageError />,
			},
			{
				path: "cocktail/:id",
				element: <Cocktail />,
				loader: singleCocktailLoader(queryClient),
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
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};
export default App;
