import React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import FirstCarouselItemHome from './FirstCarouselItem.home'


const FirstCarouselHome = () => {
  

  const carouselItems = [
    {
      id: 1,
      image: "carousel-1.jpg",
      title: "Daily 50 lucky winners get a free stay",
      description: "valid till:15 Nov"
    },
    {
      id: 2,
      image: "carousel-2.jpg",
      title: "up to 60% OFF",
      description: "On Hotel Bookings Online"
    },
    {
      id: 3,
      image: "carousel-3.jpg",
      title: "Book & Enjoy",
      description: "20% Off on the best available room rate"
    },
    {
      id: 4,
      image: "carousel-4.jpg",
      title: "Hot Summer Nights!",
      description: "Up to 3 nights free"
    }
  ]
  return (
    <div  className='container mx-auto my-28'>
      <Carousel
      opts={{
        align: "start",loop: true
      }}       plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    className="group relative"
    >
      <CarouselContent >
      {carouselItems.map((item) => (
          <FirstCarouselItemHome key={item.id} item={item} />
        ))}
        
      </CarouselContent>
      <CarouselPrevious className="w-12 h-12 backdrop-blur-sm hover:backdrop-blur-none bg-dark/30 left-0 top-[30%] -translate-x-2 hover:bg-dark/30 text-gray-100 border-none hover:text-gray-100 group-hover:translate-x-4 group-hover:opacity-100 transition  duration-300  " />
      <CarouselNext className="w-12 h-12 backdrop-blur-sm bg-dark/30 right-0 top-[30%] translate-x-2 hover:bg-dark/30 hover:backdrop-blur-none text-gray-100 border-none hover:text-gray-100 group-hover:-translate-x-4 group-hover:opacity-100 transition    duration-300 " />
    </Carousel>
    </div>
  )
}

export default FirstCarouselHome