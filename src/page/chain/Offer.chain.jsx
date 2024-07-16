import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import OfferItemChain from './OfferItem.chain'
import Autoplay from "embla-carousel-autoplay"


const OfferChain = () => {
  const offers = [{
    id: 1,
    image: "offer-1.jpg",
    title: "2023 Golf Tournament Package",
    date: "Jan 2021"
  }
    , {
    id: 2,
    image: "offer-2.jpg",
    title: "Spa Package Offer",
    date: "Dec 2022"
  }, {
    id: 3,
    image: "offer-3.jpg",
    title: "Elevate Your Stay",
    date: "Feb 2023"
  },
  {
    id: 4,
    image: "offer-4.jpg",
    title: "Pass Holder Package",
    date: "Feb 2023"
  }

  ]
  return (
    <section className='container mx-auto my-10'>
      <h3 className='text-4xl text-center  font-heading font-bold mb-5'>Special Offers</h3>
      <Carousel   opts={{
    align: "start",
    loop: true,
  }} plugins={[
    Autoplay({
      delay: 5000,
    }),
  ]} 
 className="w-full  rounded-xl overflow-hidden group">
        <CarouselContent className="w-full ">
          {offers.map((i) => (
            <OfferItemChain key={i.id} offer={i} />
          ))}
        </CarouselContent>
        <CarouselPrevious className="top-1/2 left-0 w-12 h-12 backdrop-blur-sm hover:backdrop-blur-none bg-dark/30  -translate-x-12 hover:bg-dark/30 text-gray-100 border-none hover:text-gray-100 group-hover:translate-x-4 group-hover:opacity-100 transition  duration-300 " />
        <CarouselNext className="top-1/2 right-0 w-12 h-12 backdrop-blur-sm hover:backdrop-blur-none bg-dark/30  translate-x-12 hover:bg-dark/30 text-gray-100 border-none hover:text-gray-100 group-hover:-translate-x-4 group-hover:opacity-100 transition  duration-300 " />
      </Carousel>
    </section>
  )
}

export default OfferChain