import React, { useState, useEffect } from "react";
import HomeMainContainer from "./HomeMainContainer";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";
import MenuContainer from "./MenuContainer";

const MainContainer = () => {
	const [{ foodItems }, dispatch] = useStateValue();

	const [scrollValue, setScrollValue] = useState(0);

	useEffect(() => {}, [scrollValue]);

	return (
		<div className="w-full h-auto flex flex-col items-center justify-center">
			<HomeMainContainer />

			<section className="w-full my-6">
				<div className="w-full flex items-center justify-between">
					<p
						className="text-2xl font-semibold uppercase text-headingColor relative 
					before:absolute before:rounded-full before:context before:w-32 before:h-1 
					before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out 
					duration-100"
					>
						Our fresh & healthy fruits
					</p>

					<div className="midden md:flex gap-3 items-center">
						<motion.div
							whileTap={{ scale: 0.75 }}
							className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer duration-100 
						transition-all ease-in-out hover:shadow-lg flex items-center justify-center"
							onClick={() => setScrollValue(-300)}
						>
							<MdChevronLeft className="text-lg text-white" />
						</motion.div>
						<motion.div
							whileTap={{ scale: 0.75 }}
							className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer duration-100 
						transition-all ease-in-out hover:shadow-lg flex items-center justify-center"
							onClick={() => setScrollValue(300)}
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
		</div>
	);
};

export default MainContainer;
