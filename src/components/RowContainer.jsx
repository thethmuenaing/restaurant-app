import React, { useEffect, useRef } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import NotFound from "../images/NotFound.svg";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const RowContainer = ({ flag, data, scrollValue }) => {
	//console.log(data);
	const rowContainer = useRef();

	// const [items, setItems] = useState([]);

	const [{ cartItems }, dispatch] = useStateValue();

	const addToCart = (item) => {
		const newItems = [...cartItems, item];
		// setItems(newItems);
		dispatch({
			type: actionType.SET_CARTITEMS,
			cartItems: newItems,
		});
		localStorage.setItem("cartItems", JSON.stringify(newItems));
	};

	useEffect(() => {
		rowContainer.current.scrollLeft += scrollValue;
	}, [scrollValue]);

	// useEffect(() => {
	// 	// if (items.length > 0) {
	// 		addToCart();
	// 	// }
	// }, [items]);

	return (
		<div
			ref={rowContainer}
			className={`w-full sm:mt-12 mt-10 flex items-center gap-3 scroll-smooth ${
				flag
					? "overflow-x-scroll scrollbar-none"
					: "overflow-x-hidden flex-wrap justify-center xl:justify-start"
			}`}
		>
			{data && data.length > 0 ? (
				data.map((item) => (
					<div
						key={item?.id}
						className="w-300 h-[175px] min-w-[300] my-10 py-2 px-4 bg-cardOverlay rounded-lg shadow-md 
							backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
					>
						<div className="w-full flex items-center justify-between">
							<motion.div
								whileHover={{ scale: 1.2 }}
								className="w-40 h-40 -mt-8 drop-shadow-2xl"
							>
								<img
									src={item?.imageURL}
									alt="/"
									className="w-full h-full object-contain"
								/>
							</motion.div>
							<motion.div
								whileTap={{ scale: 0.75 }}
								className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center
								cursor-pointer hover:shadow-md -mt-8"
								onClick={() => addToCart(item)}
							>
								<MdShoppingBasket className="text-white" />
							</motion.div>
						</div>

						<div className="w-full flex flex-col justify-end items-end -mt-10">
							<p className="text-textColor font-semibold text-base md:text-lg ">
								{item?.title}
							</p>
							<p className="mt-1 text-sm text-gray-500">
								{item?.calories} Calories
							</p>
							<div className="flex items-center gap-8">
								<p className="text-lg text-headingColor font-semibold ">
									<span className="text-sm text-red-500">$</span>
									{item?.price}
								</p>
							</div>
						</div>
					</div>
				))
			) : (
				<div className="w-full flex flex-col items-center justify-center">
					<img src={NotFound} alt="/" className="h-340" />
					<p className="text-xl text-headingColor font-semibold mt-6">
						Item not Available
					</p>
				</div>
			)}
		</div>
	);
};

export default RowContainer;
