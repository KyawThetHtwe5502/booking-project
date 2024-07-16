import React, { useState } from 'react'
import { CarouselItem } from '../../components/ui/carousel'
import { Card, CardContent } from "@/components/ui/card"

const FirstCarouselItemHome = ({item:{image, title, description}}) => {
    const [isHover,setIsHover] = useState(false);
    const handleMouseEnter = () => {
        setIsHover(true)
    };
    const handleMouseLeave = () => {
        setIsHover(false)
    }
  return (
    <CarouselItem  className="md:basis-1/2 lg:basis-1/3 ">
            <div className="">
              <Card className="">
                <CardContent className="flex p-0 w-[376px] " onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                  <img src={image} alt={title} className="w-[170px] rounded-l-lg h-[130px] object-cover object-center"/>
                  <div className='p-3 text-start '>
                    <h2 className={`text font-semibold font-heading mt-2 pr-10 duration-200 ${ isHover &&"text-blue-500"}`}>{title}</h2>
                    <p className="text pr-10 text-gray-500 ">{description}</p>
                  </div>
                  
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
  )
}

export default FirstCarouselItemHome