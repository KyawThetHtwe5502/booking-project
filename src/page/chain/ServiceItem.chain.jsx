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
    <CarouselItem onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="flex items-center space-x-6 py-4 pl-10 pr-3 bg-accent">
        <div>
            <img src={image} className='rounded-2xl' alt="" />
        </div>
        <div>
            <span className='font-medium '>{text}</span>
            <h6 className={`text-3xl font-heading font-bold my-5 ${isHover && "text-blue-500 duration-300"}`}>{title}</h6>
            <a href="" className='font-medium flex items-center gap-x-2 text-blue-500'>
                Explore now <BsArrowRight/>
            </a>
        </div>
    </CarouselItem>
  )
}

export default ServiceItem