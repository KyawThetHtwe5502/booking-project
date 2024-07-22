import React from 'react'

import {Button} from "../../components/ui/button"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const HeroSectionChain = () => {
    return (
        <section className='container mx-auto py-10'>
            <Carousel   opts={{
    align: "start",
    loop: true,
  }}        plugins={[
    Autoplay({
      delay: 5000,
    }),
  ]}

 className="w-full rounded-xl overflow-hidden group">
                <CarouselContent>
                    <CarouselItem className={`relative h-[400px] md:h-[600px] lg:h-[600px] xl:h-[600px] b  xl:bg-contain overflow-hidden`}>
                        <img src="hotel.jpg" className='w-full h-full object-cover' alt="" />
                        <div className='w-full h-full absolute bg-dark top-0 opacity-70'></div>
                    <div className='absolute top-1/3 left-[5.4%] px-10  xl:px-0 max-w-[600px]'>
                    <h6 className="text-white font-heading font-medium">💖 Fall in love with the City</h6>
                    <h1 className="text-white text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-heading font-bold  leading-tight md:leading-tight lg:leading-tight lg:pr-28">Modern Luxury In Manhattan</h1>
                    <Button className="bg-blue-700 text-base hover:bg-blue-800 font-bold">
                        Reserve Today
                    </Button>
                    </div>
                    </CarouselItem>
                    <CarouselItem className="relative h-[400px] md:h-[600px] lg:h-[600px]  xl:h-[600px]  overflow-hidden">
                        <iframe className="w-full h-full xl:h-screen    xl:bg-center pointer-events-none" src="https://www.youtube.com/embed/j56YlCXuPFU?si=ZCsbRdHl4KRi0-2h&autoplay=1&loop=1&mute=1&playlist=j56YlCXuPFU&controls=0&showinfo=0&modestbranding=0&fs=0&cc_load_policy=0&iv_load_policy=3&disablekb=1&" title="Looping Video" border="{0}"  frameborder="0" allow="autoplay; encrypted-media" allowFullScreen />
                        <div className='w-full h-full absolute bg-dark top-0 opacity-70'></div>
                        <div className='absolute top-0 flex  flex-col items-center justify-center w-full h-full '>
                        <div className='w-[800px] flex flex-col items-center px-60 md:px-20 lg:px-32  gap-2'>
                        <h1 className="text-4xl md:text-5xl  lg:text-5xl xl:text-6xl font-bold md:leading-tight lg:leading-tight  text-white text-center font-heading">Taking luxury hospitality to new heights</h1>
                        <Button className="font-bold text-base bg-black text-white ">Take Me there</Button>
                        </div>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="top-1/2 left-0 w-12 h-12 backdrop-blur-sm hover:backdrop-blur-none bg-dark/30  -translate-x-12 hover:bg-dark/30 text-gray-100 border-none hover:text-gray-100 group-hover:translate-x-4 group-hover:opacity-100 transition  duration-300 " />
                <CarouselNext className="top-1/2 right-0 w-12 h-12 backdrop-blur-sm hover:backdrop-blur-none bg-dark/30  translate-x-12 hover:bg-dark/30 text-gray-100 border-none hover:text-gray-100 group-hover:-translate-x-4 group-hover:opacity-100 transition  duration-300 " />
            </Carousel>

        </section>
    )
}

export default HeroSectionChain