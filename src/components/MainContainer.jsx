import React, { useState, useEffect } from "react";
import HomeMainContainer from "./HomeMainContainer";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";
import MenuContainer from "./MenuContainer";
import CartContainer from "./CartContainer";

const MainContainer = () => {
	const [{ foodItems, cartShow }] = useStateValue();

	const [scrollValue, setScrollValue] = useState(0);

	useEffect(() => {}, [scrollValue, cartShow]);

	return (
		<div className="w-full h-auto mb-12 flex flex-col items-center justify-center relative">
			<HomeMainContainer />

			<section className="w-full mt-6">
				<div className="w-full flex items-center justify-between flex-wrap">
					<p
						className="text-2xl text-start font-semibold uppercase text-headingColor relative 
					before:absolute before:rounded-full before:context before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out 
					duration-100"
					>
						Our fresh & healthy fruits
					</p>

					<div className="hidden md:flex gap-3 items-center px-3 mt-4">
						<motion.div
							whileTap={{ scale: 0.75 }}
							className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer 
						 	hover:shadow-lg flex items-center justify-center"
							onClick={() => setScrollValue(-400)}
						>
							<MdChevronLeft className="text-lg text-white" />
						</motion.div>
						<motion.div
							whileTap={{ scale: 0.75 }}
							className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer duration-100 
						transition-all ease-in-out hover:shadow-lg flex items-center justify-center"
							onClick={() => setScrollValue(400)}
						>
							<MdChevronRight className="text-lg text-white" />
						</motion.div>
					</div>
				</div>
				<RowContainer
					scrollValue={scrollValue}
					flag={true}
					data={foodItems?.filter((n) => n.category === "fruits")}
				/>
			</section>

			<MenuContainer />

			{cartShow && <CartContainer />}
		</div>
	);
};

export default MainContainer;
