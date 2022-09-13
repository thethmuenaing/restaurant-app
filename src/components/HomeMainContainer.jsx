import React from "react";
import Delivery from "../images/delivery.png";
import HeroBg from "../images/heroBg.png";
import { heroData } from "../utils/data";

const HomeContainer = () => {
	return (
		<section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
			{/* left */}
			<div className="py-2 flex-1 flex flex-col items-center md:items-start mt-10 gap-6">
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

				<p className="text-[2rem] leading-[1] md:text-[2.5rem] lg:text-[4rem] text-center md:text-start font-bold tracking-wider text-headingColor md:my-6">
					The fastest Delivery in
					<span className="text-orange-600 text-[3rem] lg:text-[5rem]">
						Your City
					</span>
				</p>
				<p className="text-base xl:text-lg tracking-wide text-textColor text-center md:text-left">
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

			{/* right */}

			<div className="py-2 flex-1 flex items-center justify-center mb-10 mt-5 relative">
				<img
					src={HeroBg}
					className="lg:ml-auto w-full xl:w-[75%] h-[760px] sm:h-650 md:h-[500px] lg:h-[700px]"
					alt="hero-bg"
				/>

				<div
					className="absolute inset-y-[5%] inset-x-[20%] md:inset-x-0 md:inset-y-[50px] md:px-2 
					lg:inset-0 xl:top-[5%] xl:bottom-0 xl:inset-y-0 xl:w-[80%] grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 items-center py-4"
				>
					{heroData &&
						heroData.map((n) => (
							<div
								key={n.id}
								className="w-full xl:w-[80%] px-2 py-5 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg "
							>
								<img
									src={n.imageSrc}
									className="w-20 lg:w-40 -mt-10 lg:-mt-20"
									alt="i1"
								/>

								<p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
									{n.name}
								</p>

								<p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
									{n.decp}
								</p>

								<p className="ext-sm font-semibold text-headingColor">
									<span className="textt-xs text-red-600">$</span> {n.price}
								</p>
							</div>
						))}
				</div>
			</div>
		</section>
	);
};

export default HomeContainer;
