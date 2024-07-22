import React from 'react'
import { Carousel, CarouselContent, CarouselPrevious, CarouselNext } from '../../components/ui/carousel'
import ServiceItem from './ServiceItem.chain'
import Autoplay from "embla-carousel-autoplay"
import { Button } from '../../components/ui/button'
import { FaWifi, FaPersonSwimming, FaPersonShelter, FaUtensils, FaBolt, FaDumbbell, FaSpa, FaEllipsis  } from "react-icons/fa6";

const ServiceChain = () => {
    const places = [
        {
            id: 1,
            image: "service-1.jpg",
            text: "Honeymoon Sweets",
            title: "Maldives Sunshine Hotel"
        },
        {
            id: 2,
            image: "service-2.jpg",
            text: "Royal Stay",
            title: "Booking Grab Palace Japan"
        },
        {
            id: 3,
            image: "service-3.jpg",
            text: "Adventure Stay",
            title: "Golf & Spa Resort In New York"
        }
    ]
    return (
        <section className='container mx-auto grid grid-cols-12 lg:items-center xl:items-center lg:gap-x-0 xl:gap-x-6'>
            <div className='col-span-12  lg:col-span-6 xl:col-span-6'>
                <div className='mb-6 lg:mb-0 xl:mb-0'>
                    <h2 className='text-3xl lg:text-5xl xl:text-5xl font-heading font-bold leading-tight lg:leading-tight xl:leading-tight mb-2'>We Provide Our Best Facilities For You</h2>
                    <p className='text-gray-500 lg:pr-8 dark:text-gray-400'>Book your hotel with us and don't forget to grab an awesome hotel deal to save massive on your stay.</p>
                    <Button className="my-4 text-base font-bold dark:bg-[#0b0a12] dark:text-white dark:hover:bg-gray-800">Contact Us</Button>

                </div>
                <div className='grid grid-cols-2 gap-2 xl:gap-0 md:mb-5 '> 
                    <ul className='col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1 flex flex-col space-y-2 md:my-4 lg:my-4 xl:my-4'>
                        <li className='inline-flex items-center gap-x-2 text-base font-heading font-medium'>
                            <FaWifi className='text-lg text-blue-700' /> Free Wifi
                        </li>
                        <li className='inline-flex items-center gap-x-2 text-base font-heading font-medium'>
                            <FaPersonSwimming className='text-lg text-blue-700' /> Swimming Pool
                        </li>
                        <li className='inline-flex items-center gap-x-2 text-base font-heading font-medium'>
                            <FaPersonShelter className=' text-blue-700'/> Private Workshop
                        </li>
                        <li className='inline-flex items-center gap-x-2 text-base font-heading font-medium'>
                            <FaUtensils className='text-blue-700'/> Breakfast
                        </li>
                    </ul>
                    <ul className='col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1 flex flex-col space-y-2'>
                        <li className='inline-flex items-center gap-x-2 text-base font-heading font-medium '>
                            <FaBolt className='text-blue-700' /> Free Electricity
                        </li>
                        <li className='inline-flex items-center gap-x-2 text-base font-heading font-medium '>
                            <FaDumbbell className='text-lg text-blue-700' /> Gym Space
                        </li>
                        <li className='inline-flex items-center gap-x-2 text-base font-heading font-medium ' >
                            <FaSpa className='text-lg text-blue-700' /> Spa
                        </li>
                        <li className='inline-flex items-center gap-x-2 text-base font-heading font-medium '>
                            <FaEllipsis className=' text-blue-700'/> Other Services
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className='col-span-12 lg:col-span-6 xl:col-span-6 '>
                <Carousel opts={{
                    align: "start",
                    loop: true,
                }} plugins={[
                    Autoplay({
                        delay: 5000,
                    }),
                ]}
                    className="group bg-accent dark:bg-gray-800 rounded-xl overflow-hidden flex items-center">
                    <CarouselContent className="dark:bg-gray-800">
                        {places.map(i => <ServiceItem key={i.id} item={i} />)}
                    </CarouselContent>
                    <CarouselPrevious className="top-1/2 left-0 w-12 h-12 backdrop-blur-sm hover:backdrop-blur-none bg-dark/30  -translate-x-12 hover:bg-dark/30 text-gray-100 border-none hover:text-gray-100 group-hover:translate-x-4 group-hover:opacity-100 transition  duration-300 " />
                    <CarouselNext className="top-1/2 right-0 w-12 h-12 backdrop-blur-sm hover:backdrop-blur-none bg-dark/30  translate-x-12 hover:bg-dark/30 text-gray-100 border-none hover:text-gray-100 group-hover:-translate-x-4 group-hover:opacity-100 transition  duration-300 " />
                </Carousel>
            </div>
        </section>
    )
}

export default ServiceChain