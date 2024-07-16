import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '../../components/ui/carousel'
import Autoplay from "embla-carousel-autoplay"
import { BsFullscreen,BsPlayCircleFill  } from "react-icons/bs";
import MomentItemChain from './MomentItem.chain';

const MomentsChain = () => {
    const images = [
        {
            id: 1,
            img: "offer-2.jpg",
            smallImg: "offer-2.jpg",
            icon : <BsFullscreen/>
        },
        {
            id: 2,
            img: "moment-1.jpg",
            smallImg: "moment-1.jpg",
            icon : <BsFullscreen/>
        },
        {
            id: 3,
            img: "moment-2.jpg",
            smallImg: "moment-2.jpg",
            icon : <BsFullscreen/>
        },
        {
            id: 4,
            img: "moment-3.jpg",
            smallImg: "moment-3.jpg",
            icon : <BsFullscreen/>
        },
        {
            id: 5,
            img: "moment-4.jpg",
            smallImg: "moment-4.jpg",
            icon : <BsFullscreen/>
        },
        {
            id: 6,
            img: "moment-5.jpg",
            smallImg: "moment-5.jpg",
            icon : <BsFullscreen/>

        },
        {
            id: 7,
            img: "https://www.youtube.com/embed/tXHviS-4ygo",
            smallImg: "moment-6.jpg",
            icon : <BsPlayCircleFill/>

        },
        {
            id: 8,
            img: "moment-7.jpg",
            smallImg: "moment-7.jpg",
            icon : <BsFullscreen/>

        }
    ]
    return (
        <section className='py-7'>
            <h1 className='text-center text-5xl font-heading font-bold mb-10'>Our Hotel Precious Moments</h1>
            <Carousel opts={{
                align: "start",
                loop: true,
            }}       plugins={[
                Autoplay({
                  delay: 5000,
                }),
              ]}
        
                className="group overflow-hidden p-4">
                <CarouselContent className='flex items-end '>
                    {images.map(i => <MomentItemChain key={i.id} item={i} />)}


                </CarouselContent>
                <CarouselPrevious className="top-1/2 left-0 w-12 h-12 backdrop-blur-sm hover:backdrop-blur-none bg-dark/30  -translate-x-12 hover:bg-dark/30 text-gray-100 border-none hover:text-gray-100 group-hover:translate-x-4 group-hover:opacity-100 transition  duration-300 " />
                <CarouselNext className="top-1/2 right-0 w-12 h-12 backdrop-blur-sm hover:backdrop-blur-none bg-dark/30  translate-x-12 hover:bg-dark/30 text-gray-100 border-none hover:text-gray-100 group-hover:-translate-x-4 group-hover:opacity-100 transition  duration-300 " />
            </Carousel>
        </section>

    )
}

export default MomentsChain