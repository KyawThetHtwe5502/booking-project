import React from 'react'
import { PiForkKnifeFill } from "react-icons/pi";
import { BsStopwatchFill, BsShieldFillCheck, BsLightningFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";


const ServiceHome = () => {
	const products = [
		{
			id: 1,
			icon: <PiForkKnifeFill className='text-[#0CBC87]' />,
			title: "Quality Food",
			description: "Departure defective arranging rapturous did. Conduct denied adding worthy little."
		},
		{
			id: 2,
			icon: <BsStopwatchFill className="text-[#D6293E]" />,
			title: "Quick Services",
			description: "Supposing so be resolving breakfast am or perfectly."
		},
		{
			id: 3,
			icon: <BsShieldFillCheck className='text-[#FD7E14]' />,
			title: "High Security",
			description: "Arranging rapturous did believe him all had supported."
		},
		{
			id: 4,
			icon: <BsLightningFill className='text-[#17A2B8]' />,
			title: "24 Hours Alert",
			description: "Rapturous did believe him all had supported."
		}
	]
	return (
		<section className='container mx-auto mb-8 xl:mb-28'>
			<div className='grid grid-cols-12  gap-y-8 lg:items-center'>
				<div className='relative col-span-12 lg:col-span-5 xl:col-span-5'>
					<div>
					<img className= 'md:w-10/12 h-[493.33px]  xl:w-[473px] lg:w-[366.97px] lg:h-[489px] xl:h-[597px] rounded-2xl' src="./01.jpg" />
					<div className='bg-white dark:bg-darkBg absolute bottom-6 xl:bottom-[4%] left-10 flex justify-between  gap-x-5 px-4 py-3 rounded-xl'>
						<div>
							<h4 className='font-heading mb-2 '>Client</h4>
							<div className='flex'>
								<img className='w-[40px] h-[40px] object-cover rounded-full' src="profile.jpg" />
								<img className='w-[40px] h-[40px] object-cover rounded-full -ms-3' src="client-1.jpg" />
								<img className='w-[40px] h-[40px] object-cover rounded-full -ms-3' src="client-2.jpg" />
								<img className='w-[40px] h-[40px] object-cover rounded-full -ms-3' src="client-3.jpg" />
								<span className='inline-flex justify-center items-center w-[40px] h-[40px] rounded-full  bg-blue-800 text-white -ms-3'>1K+</span>
							</div>
						</div>
						<div>
							<h4 className='font-heading mb-3'>Rating</h4>
							<p className='flex items-center gap-1 font-heading font-bold mb-4'>
								4.5
								<span className='text-warning text-lg'><FaStar /></span>
							</p>
						</div>
						<img className='absolute top-0 -translate-x-5 -translate-y-5 left-0 w-[40px] ' src="like.svg" alt="" />
					</div>
					<svg className="fill-warning absolute top-0 -translate-y-1/2 left-0 -translate-x-1/3 " width="77px" height="77px">
						<path d="M76.997,41.258 L45.173,41.258 L67.676,63.760 L63.763,67.673 L41.261,45.171 L41.261,76.994 L35.728,76.994 L35.728,45.171 L13.226,67.673 L9.313,63.760 L31.816,41.258 L-0.007,41.258 L-0.007,35.725 L31.816,35.725 L9.313,13.223 L13.226,9.311 L35.728,31.813 L35.728,-0.010 L41.261,-0.010 L41.261,31.813 L63.763,9.311 L67.676,13.223 L45.174,35.725 L76.997,35.725 L76.997,41.258 Z" />
					</svg>
					<svg className="hidden md:inline-block lg:inline-block xl:inline-block absolute md:bottom-0 md:translate-y-12 md:right-0 md:translate-x-10  lg:translate-x-6 lg:translate-y-12 lg:bottom-0 lg:right-0 xl:bottom-0  xl:-right-9  xl:translate-y-12   -z-[10]   fill-[#b0b0b8]" height="400px" viewBox="0 0 340 340">
						<circle cx="194.2" cy="2.2" r="2.2" />
						<circle cx="2.2" cy="2.2" r="2.2" />
						<circle cx="218.2" cy="2.2" r="2.2" />
						<circle cx="26.2" cy="2.2" r="2.2" />
						<circle cx="242.2" cy="2.2" r="2.2" />
						<circle cx="50.2" cy="2.2" r="2.2" />
						<circle cx="266.2" cy="2.2" r="2.2" />
						<circle cx="74.2" cy="2.2" r="2.2" />
						<circle cx="290.2" cy="2.2" r="2.2" />
						<circle cx="98.2" cy="2.2" r="2.2" />
						<circle cx="314.2" cy="2.2" r="2.2" />
						<circle cx="122.2" cy="2.2" r="2.2" />
						<circle cx="338.2" cy="2.2" r="2.2" />
						<circle cx="146.2" cy="2.2" r="2.2" />
						<circle cx="170.2" cy="2.2" r="2.2" />
						<circle cx="194.2" cy="26.2" r="2.2" />
						<circle cx="2.2" cy="26.2" r="2.2" />
						<circle cx="218.2" cy="26.2" r="2.2" />
						<circle cx="26.2" cy="26.2" r="2.2" />
						<circle cx="242.2" cy="26.2" r="2.2" />
						<circle cx="50.2" cy="26.2" r="2.2" />
						<circle cx="266.2" cy="26.2" r="2.2" />
						<circle cx="74.2" cy="26.2" r="2.2" />
						<circle cx="290.2" cy="26.2" r="2.2" />
						<circle cx="98.2" cy="26.2" r="2.2" />
						<circle cx="314.2" cy="26.2" r="2.2" />
						<circle cx="122.2" cy="26.2" r="2.2" />
						<circle cx="338.2" cy="26.2" r="2.2" />
						<circle cx="146.2" cy="26.2" r="2.2" />
						<circle cx="170.2" cy="26.2" r="2.2" />
						<circle cx="194.2" cy="50.2" r="2.2" />
						<circle cx="2.2" cy="50.2" r="2.2" />
						<circle cx="218.2" cy="50.2" r="2.2" />
						<circle cx="26.2" cy="50.2" r="2.2" />
						<circle cx="242.2" cy="50.2" r="2.2" />
						<circle cx="50.2" cy="50.2" r="2.2" />
						<circle cx="266.2" cy="50.2" r="2.2" />
						<circle cx="74.2" cy="50.2" r="2.2" />
						<circle cx="290.2" cy="50.2" r="2.2" />
						<circle cx="98.2" cy="50.2" r="2.2" />
						<circle cx="314.2" cy="50.2" r="2.2" />
						<circle cx="122.2" cy="50.2" r="2.2" />
						<circle cx="338.2" cy="50.2" r="2.2" />
						<circle cx="146.2" cy="50.2" r="2.2" />
						<circle cx="170.2" cy="50.2" r="2.2" />
						<circle cx="194.2" cy="74.2" r="2.2" />
						<circle cx="2.2" cy="74.2" r="2.2" />
						<circle cx="218.2" cy="74.2" r="2.2" />
						<circle cx="26.2" cy="74.2" r="2.2" />
						<circle cx="242.2" cy="74.2" r="2.2" />
						<circle cx="50.2" cy="74.2" r="2.2" />
						<circle cx="266.2" cy="74.2" r="2.2" />
						<circle cx="74.2" cy="74.2" r="2.2" />
						<circle cx="290.2" cy="74.2" r="2.2" />
						<circle cx="98.2" cy="74.2" r="2.2" />
						<circle cx="314.2" cy="74.2" r="2.2" />
						<circle cx="122.2" cy="74.2" r="2.2" />
						<circle cx="338.2" cy="74.2" r="2.2" />
						<circle cx="146.2" cy="74.2" r="2.2" />
						<circle cx="170.2" cy="74.2" r="2.2" />
						<circle cx="194.2" cy="98.2" r="2.2" />
						<circle cx="2.2" cy="98.2" r="2.2" />
						<circle cx="218.2" cy="98.2" r="2.2" />
						<circle cx="26.2" cy="98.2" r="2.2" />
						<circle cx="242.2" cy="98.2" r="2.2" />
						<circle cx="50.2" cy="98.2" r="2.2" />
						<circle cx="266.2" cy="98.2" r="2.2" />
						<circle cx="74.2" cy="98.2" r="2.2" />
						<circle cx="290.2" cy="98.2" r="2.2" />
						<circle cx="98.2" cy="98.2" r="2.2" />
						<circle cx="314.2" cy="98.2" r="2.2" />
						<circle cx="122.2" cy="98.2" r="2.2" />
						<circle cx="338.2" cy="98.2" r="2.2" />
						<circle cx="146.2" cy="98.2" r="2.2" />
						<circle cx="170.2" cy="98.2" r="2.2" />
						<circle cx="194.2" cy="122.2" r="2.2" />
						<circle cx="2.2" cy="122.2" r="2.2" />
						<circle cx="218.2" cy="122.2" r="2.2" />
						<circle cx="26.2" cy="122.2" r="2.2" />
						<circle cx="242.2" cy="122.2" r="2.2" />
						<circle cx="50.2" cy="122.2" r="2.2" />
						<circle cx="266.2" cy="122.2" r="2.2" />
						<circle cx="74.2" cy="122.2" r="2.2" />
						<circle cx="290.2" cy="122.2" r="2.2" />
						<circle cx="98.2" cy="122.2" r="2.2" />
						<circle cx="314.2" cy="122.2" r="2.2" />
						<circle cx="122.2" cy="122.2" r="2.2" />
						<circle cx="338.2" cy="122.2" r="2.2" />
						<circle cx="146.2" cy="122.2" r="2.2" />
						<circle cx="170.2" cy="122.2" r="2.2" />
						<circle cx="194.2" cy="146.2" r="2.2" />
						<circle cx="2.2" cy="146.2" r="2.2" />
						<circle cx="218.2" cy="146.2" r="2.2" />
						<circle cx="26.2" cy="146.2" r="2.2" />
						<circle cx="242.2" cy="146.2" r="2.2" />
						<circle cx="50.2" cy="146.2" r="2.2" />
						<circle cx="266.2" cy="146.2" r="2.2" />
						<circle cx="74.2" cy="146.2" r="2.2" />
						<circle cx="290.2" cy="146.2" r="2.2" />
						<circle cx="98.2" cy="146.2" r="2.2" />
						<circle cx="314.2" cy="146.2" r="2.2" />
						<circle cx="122.2" cy="146.2" r="2.2" />
						<circle cx="338.2" cy="146.2" r="2.2" />
						<circle cx="146.2" cy="146.2" r="2.2" />
						<circle cx="170.2" cy="146.2" r="2.2" />
						<circle cx="194.2" cy="170.2" r="2.2" />
						<circle cx="2.2" cy="170.2" r="2.2" />
						<circle cx="218.2" cy="170.2" r="2.2" />
						<circle cx="26.2" cy="170.2" r="2.2" />
						<circle cx="242.2" cy="170.2" r="2.2" />
						<circle cx="50.2" cy="170.2" r="2.2" />
						<circle cx="266.2" cy="170.2" r="2.2" />
						<circle cx="74.2" cy="170.2" r="2.2" />
						<circle cx="290.2" cy="170.2" r="2.2" />
						<circle cx="98.2" cy="170.2" r="2.2" />
						<circle cx="314.2" cy="170.2" r="2.2" />
						<circle cx="122.2" cy="170.2" r="2.2" />
						<circle cx="338.2" cy="170.2" r="2.2" />
						<circle cx="146.2" cy="170.2" r="2.2" />
						<circle cx="170.2" cy="170.2" r="2.2" />
						<circle cx="194.2" cy="194.2" r="2.2" />
						<circle cx="2.2" cy="194.2" r="2.2" />
						<circle cx="218.2" cy="194.2" r="2.2" />
						<circle cx="26.2" cy="194.2" r="2.2" />
						<circle cx="242.2" cy="194.2" r="2.2" />
						<circle cx="50.2" cy="194.2" r="2.2" />
						<circle cx="266.2" cy="194.2" r="2.2" />
						<circle cx="74.2" cy="194.2" r="2.2" />
						<circle cx="290.2" cy="194.2" r="2.2" />
						<circle cx="98.2" cy="194.2" r="2.2" />
						<circle cx="314.2" cy="194.2" r="2.2" />
						<circle cx="122.2" cy="194.2" r="2.2" />
						<circle cx="338.2" cy="194.2" r="2.2" />
						<circle cx="146.2" cy="194.2" r="2.2" />
						<circle cx="170.2" cy="194.2" r="2.2" />
						<circle cx="194.2" cy="218.2" r="2.2" />
						<circle cx="2.2" cy="218.2" r="2.2" />
						<circle cx="218.2" cy="218.2" r="2.2" />
						<circle cx="26.2" cy="218.2" r="2.2" />
						<circle cx="242.2" cy="218.2" r="2.2" />
						<circle cx="50.2" cy="218.2" r="2.2" />
						<circle cx="266.2" cy="218.2" r="2.2" />
						<circle cx="74.2" cy="218.2" r="2.2" />
						<circle cx="290.2" cy="218.2" r="2.2" />
						<circle cx="98.2" cy="218.2" r="2.2" />
						<circle cx="314.2" cy="218.2" r="2.2" />
						<circle cx="122.2" cy="218.2" r="2.2" />
						<circle cx="338.2" cy="218.2" r="2.2" />
						<circle cx="146.2" cy="218.2" r="2.2" />
						<circle cx="170.2" cy="218.2" r="2.2" />
						<circle cx="194.2" cy="242.2" r="2.2" />
						<circle cx="2.2" cy="242.2" r="2.2" />
						<circle cx="218.2" cy="242.2" r="2.2" />
						<circle cx="26.2" cy="242.2" r="2.2" />
						<circle cx="242.2" cy="242.2" r="2.2" />
						<circle cx="50.2" cy="242.2" r="2.2" />
						<circle cx="266.2" cy="242.2" r="2.2" />
						<circle cx="74.2" cy="242.2" r="2.2" />
						<circle cx="290.2" cy="242.2" r="2.2" />
						<circle cx="98.2" cy="242.2" r="2.2" />
						<circle cx="314.2" cy="242.2" r="2.2" />
						<circle cx="122.2" cy="242.2" r="2.2" />
						<circle cx="338.2" cy="242.2" r="2.2" />
						<circle cx="146.2" cy="242.2" r="2.2" />
						<circle cx="170.2" cy="242.2" r="2.2" />
						<circle cx="194.2" cy="266.2" r="2.2" />
						<circle cx="2.2" cy="266.2" r="2.2" />
						<circle cx="218.2" cy="266.2" r="2.2" />
						<circle cx="26.2" cy="266.2" r="2.2" />
						<circle cx="242.2" cy="266.2" r="2.2" />
						<circle cx="50.2" cy="266.2" r="2.2" />
						<circle cx="266.2" cy="266.2" r="2.2" />
						<circle cx="74.2" cy="266.2" r="2.2" />
						<circle cx="290.2" cy="266.2" r="2.2" />
						<circle cx="98.2" cy="266.2" r="2.2" />
						<circle cx="314.2" cy="266.2" r="2.2" />
						<circle cx="122.2" cy="266.2" r="2.2" />
						<circle cx="338.2" cy="266.2" r="2.2" />
						<circle cx="146.2" cy="266.2" r="2.2" />
						<circle cx="170.2" cy="266.2" r="2.2" />
						<circle cx="194.2" cy="290.2" r="2.2" />
						<circle cx="2.2" cy="290.2" r="2.2" />
						<circle cx="218.2" cy="290.2" r="2.2" />
						<circle cx="26.2" cy="290.2" r="2.2" />
						<circle cx="242.2" cy="290.2" r="2.2" />
						<circle cx="50.2" cy="290.2" r="2.2" />
						<circle cx="266.2" cy="290.2" r="2.2" />
						<circle cx="74.2" cy="290.2" r="2.2" />
						<circle cx="290.2" cy="290.2" r="2.2" />
						<circle cx="98.2" cy="290.2" r="2.2" />
						<circle cx="314.2" cy="290.2" r="2.2" />
						<circle cx="122.2" cy="290.2" r="2.2" />
						<circle cx="338.2" cy="290.2" r="2.2" />
						<circle cx="146.2" cy="290.2" r="2.2" />
						<circle cx="170.2" cy="290.2" r="2.2" />
						<circle cx="194.2" cy="314.2" r="2.2" />
						<circle cx="2.2" cy="314.2" r="2.2" />
						<circle cx="218.2" cy="314.2" r="2.2" />
						<circle cx="26.2" cy="314.2" r="2.2" />
						<circle cx="242.2" cy="314.2" r="2.2" />
						<circle cx="50.2" cy="314.2" r="2.2" />
						<circle cx="266.2" cy="314.2" r="2.2" />
						<circle cx="74.2" cy="314.2" r="2.2" />
						<circle cx="290.2" cy="314.2" r="2.2" />
						<circle cx="98.2" cy="314.2" r="2.2" />
						<circle cx="314.2" cy="314.2" r="2.2" />
						<circle cx="122.2" cy="314.2" r="2.2" />
						<circle cx="338.2" cy="314.2" r="2.2" />
						<circle cx="146.2" cy="314.2" r="2.2" />
						<circle cx="170.2" cy="314.2" r="2.2" />
						<circle cx="194.2" cy="338.2" r="2.2" />
						<circle cx="2.2" cy="338.2" r="2.2" />
						<circle cx="218.2" cy="338.2" r="2.2" />
						<circle cx="26.2" cy="338.2" r="2.2" />
						<circle cx="242.2" cy="338.2" r="2.2" />
						<circle cx="50.2" cy="338.2" r="2.2" />
						<circle cx="266.2" cy="338.2" r="2.2" />
						<circle cx="74.2" cy="338.2" r="2.2" />
						<circle cx="290.2" cy="338.2" r="2.2" />
						<circle cx="98.2" cy="338.2" r="2.2" />
						<circle cx="314.2" cy="338.2" r="2.2" />
						<circle cx="122.2" cy="338.2" r="2.2" />
						<circle cx="338.2" cy="338.2" r="2.2" />
						<circle cx="146.2" cy="338.2" r="2.2" />
						<circle cx="170.2" cy="338.2" r="2.2" />
					</svg>
					</div>
				</div>
				{/* <div className='col-span-2'></div> */}
				<div className='col-span-12 lg:col-span-7 xl:col-span-7 inline-block '>
					<div className='lg:pl-20  xl:pl-32'>
						<div className=' mb-10'>
							<h2 className='text-3xl xl:text-5xl md:text-4xl lg:text-[44.3px] font-bold font-heading xl:leading-[4rem] lg:leading-tight mb-5 lg:mb-10 xl:mb-0 xl:pr-8 lg:p-0'>The Best Holidays Start Here!</h2>
							<p className='pr-7 xl:pr-16 text-gray-500 dark:text-gray-400'>Book your hotel with us and don't forget to grab an awesome hotel deal to save massive on your stay.</p>
						</div>
						<div className=' grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>
							{products.map((i) => <div key={i.id}>
								<span className='text-2xl w-14 h-14 rounded-full bg-[#0cbc871a] flex justify-center items-center mb-2'>
									{i.icon}
								</span>
								<h3 className='font-heading text-lg font-semibold mb-2'>{i.title}</h3>
								<p className='pr-8 text-gray-500 dark:text-gray-400 mb-5'>{i.description}</p>
							</div>)}

						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ServiceHome