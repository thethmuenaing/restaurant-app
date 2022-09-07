import React from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";

const RowContainer = ({ flag, data }) => {
	console.log(data);
	return (
		<div
			className={`w-full my-12  ${
				flag ? "overflow-x-scroll" : "overflow-x-hidden"
			}`}
		>
			<div
				className="w-300 md:w-350 h-auto my-12 p-2 bg-cardOverlay rounded-lg shadow-md 
			backdrop-blur-lg hover:drop-shadow-lg"
			>
				<div className="w-full flex items-center justify-between">
					<motion.img
						whileHover={{ scale: 1.2 }}
						src="https://firebasestorage.googleapis.com/v0/b/restaurantapp-5a085.appspot.com/o/images%2F1662365196401-i6.png?alt=media&token=50dc8222-4ebf-42da-9344-931f97bac820"
						alt="/"
						className="w-40 -mt-8 drop-shadow-2xl"
					/>
					<motion.div
						whileTap={{ scale: 0.75 }}
						className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center
					cursor-pointer hover:shadow-md "
					>
						<MdShoppingBasket className="text-white" />
					</motion.div>
				</div>

				<div className="w-full flex flex-col justify-end items-end gap-4 ">
					<p className="text-textColor font-semibold text-base md:text-lg ">
						Chocolate & Vanilla
					</p>
					<p className="mt-1 text-sm text-gray-500">45 Calories</p>
					<div className="flex items-center gap-8">
						<p className="text-lg text-headingColor font-semibold ">
							<span className="text-sm text-red-500">$</span>5.25
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RowContainer;
