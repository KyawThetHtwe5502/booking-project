import React, { useState } from 'react'
import { BsArrowRight } from "react-icons/bs";


import { CarouselItem } from '../../components/ui/carousel'
const ServiceItem = ({item:{image,text,title}}) => {
    const [isHover,setIsHover] = useState(false);
    const handleMouseEnter = () => {
        setIsHover(true)
    };
    const handleMouseLeave = () => {
        setIsHover(false)
    }
  return (
    <CarouselItem onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="md:flex xl:flex lg:flex items-center md:space-x-6 xl:space-x-6 lg:space-x-2 py-6 md:py-3 md:px-14  xl:py-4  xl:pl-10 xl:pr-3 bg-accent dark:bg-gray-800">
        <div className='px-7 md:px-0 mb-6 md:mb-0'>
            <img src={image} className='rounded-2xl' alt="" />
        </div>
        <div>
            <span className='font-medium '>{text}</span>
            <h6 className={`text-2xl  xl:text-3xl font-heading font-bold pr-5 md:pr-0 lg:pr-0 xl:pr-0 my-5 ${isHover && "text-blue-500 duration-300"}`}>{title}</h6>
            <a href="" className='font-medium flex items-center gap-x-2 text-blue-500'>
                Explore now <BsArrowRight/>
            </a>
        </div>
    </CarouselItem>
  )
}

export default ServiceItem