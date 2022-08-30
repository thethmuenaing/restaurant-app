import React from "react";
import Delivery from "../images/delivery.png";

const HomeContainer = () => {
	return (
		<section
			className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full"
			id="home "
		>
			<div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
				<div className="flex items-center justify-center gap-2 bg-orange-100 px-4 py-1 rounded-full">
					<p className="text-base text-orange-500 font-semibold">
						Bike Delivery
					</p>
					<div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
						<img
							src={Delivery}
							className="w-full h-full object-contain"
							alt="delivery.png"
						/>
					</div>
				</div>

				<p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
					The fastest Delivery in
					<span className="text-orange-600 text-[3rem] lg:text-[5rem]">
						Your City
					</span>
				</p>
				<p className="text-base text-textColor text-center md:w-[80%] md:text-left">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
					exercitationem impedit repellendus velit quasi. Eaque rem nobis optio
					cupiditate corrupti soluta assumenda sequi vitae dolorum fugit
					exercitationem, deleniti, illo modi.
				</p>

				<button
					type="button"
					className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto  px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
				>
					Order Now
				</button>
			</div>

			<div className="py-2 bg-blue-400 flex-1 "></div>
		</section>
	);
};

export default HomeContainer;
