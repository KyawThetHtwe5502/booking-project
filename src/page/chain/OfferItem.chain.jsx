import React from 'react'
import { CarouselItem } from '../../components/ui/carousel'
import { Button } from '../../components/ui/button'
const OfferItemChain = ({offer: {image,title,date}}) => {
  return (
    <CarouselItem className="md:basis-1/2 lg:basis-1/3 h-[400px]" >
              <div className="p-1">
                <div className="relative z-10 ">
                    <img src={image} className='rounded-xl' alt="" />
                  <div className="absolute w-[85%] translate-x-[8%] z-40 flex flex-col items-center translate-y-1/2 bg-white bottom-0 p-3 rounded-lg shadow-lg ">
                    <h6 className='font-heading font-bold mb-1 hover:text-blue-500 duration-300'>{title}</h6>
                    <span className='text-sm text-gray-500 mb-2 '>Vail through {date}</span>
                    <Button className="text-sm font-bold">View Offer</Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
  )
}

export default OfferItemChain