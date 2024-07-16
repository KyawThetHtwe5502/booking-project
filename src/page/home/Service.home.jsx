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
		<section className='container mx-auto mb-28'>
			<div className='grid grid-cols-12'>
				<div className='relative col-span-5'>
					<img className='w-[473px] h-[597px] rounded-2xl' src="./01.jpg" />
					<div className='bg-white absolute bottom-6 left-10 flex justify-between  gap-x-5 px-4 py-3 rounded-xl'>
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
					<svg className=" absolute bottom-0 -right-9 translate-y-12   -z-[10] fill-blue-200" height="400" viewBox="0 0 340 340">
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
				{/* <div className='col-span-2'></div> */}
				<div className='col-span-7 inline-block '>
					<div className='pl-32'>
						<div className=' mb-10'>
							<h2 className='text-5xl font-bold font-heading leading-[4rem] pr-8 '>The Best Holidays Start Here!</h2>
							<p className='pr-16 '>Book your hotel with us and don't forget to grab an awesome hotel deal to save massive on your stay.</p>
						</div>
						<div className=' grid grid-cols-2'>
							{products.map((i) => <div key={i.id}>
								<span className='text-2xl w-14 h-14 rounded-full bg-[#0cbc871a] flex justify-center items-center mb-2'>
									{i.icon}
								</span>
								<h3 className='font-heading text-lg font-semibold mb-2'>{i.title}</h3>
								<p className='pr-8 text-gray-500 mb-5'>{i.description}</p>
							</div>)}

						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ServiceHome