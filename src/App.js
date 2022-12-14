import React, { useEffect } from "react";

import { Header, MainContainer, CreateContainer } from "./components";
import { Route, Routes } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";

const App = () => {
	const [{ foodItems }, dispatch] = useStateValue();

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		await getAllFoodItems().then((data) => {
			dispatch({
				type: actionType.SET_FOOD_ITEMS,
				foodItems: data,
			});
		});
	};

	return (
		<AnimatePresence exitBeforeEnter>
			<div className="w-screen h-auto flex flex-col bg-primary scroll-smooth">
				<Header />

				<main className="px-4 md:px-16 w-full h-full">
					<Routes>
						<Route path="/*" element={<MainContainer />} />
						<Route path="/createItem" element={<CreateContainer />} />
					</Routes>
				</main>
			</div>
		</AnimatePresence>
	);
};

export default App;
