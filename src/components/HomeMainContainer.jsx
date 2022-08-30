import React from "react";
import Delivery from "../images/delivery.png";
import HeroBg from "../images/heroBg.png";
import { heroData } from "../utils/data";

const HomeContainer = () => {
	return (
		<section
			className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full"
			id="home "
		>
			{/* left */}
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

			{/* right */}

			<div className="py-2 flex-1 flex items-center relative">
				<img
					src={HeroBg}
					className="ml-auto h-420 w-full lg:w-auto lg:h-650"
					alt="hero-bg"
				/>

				<div className=" absolute inset-0 flex items-center justify-center lg:pr-32 py-4 gap-4 flex-wrap">
					{heroData &&
						heroData.map((n) => (
							<div
								key={n.id}
								className="lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg "
							>
								<img
									src={n.imageSrc}
									className="w-20 lg:w-40 -mt-10 lg:-mt-20"
									alt="i1"
								/>

								<p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
									{n.name}
								</p>

								<p className="texxt-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
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
