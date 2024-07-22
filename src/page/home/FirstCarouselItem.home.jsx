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
    <CarouselItem  className="lg:basis-1/2 xl:basis-1/3 ">
            <div className="">
              <Card className="  rounded-2xl overflow-hidden">
                <CardContent className=" md:w-full lg:w-full md:flex lg:flex xl:flex p-0  xl:w-[376px] " onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                  <img src={image} alt={title} className="xl:w-[170px] w-full md:w-1/2 lg:w-1/2 rounded-b-none rounded-2xl lg:rounded-l-lg md:rounded-l-lg md:rounded-r-none xl:rounded-r-none lg:rounded-r-none xl:h-[130px] object-cover object-center"/>
                  <div className='p-3 text-start md:flex items-center w-full'>
                    <div>
                    <h2 className={`text font-semibold font-heading  mt-2 md:pr-0 pr-10 duration-200 ${ isHover &&"text-blue-500"}`}>{title}</h2>
                    <p className="text pr-10 md:pr-0 text-gray-500 ">{description}</p>
                    </div>
                  </div>
                  
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
  )
}

export default FirstCarouselItemHome