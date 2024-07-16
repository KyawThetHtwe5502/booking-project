import React, { useState } from 'react'
import { CarouselItem } from '../../components/ui/carousel'
import { Button } from '../../components/ui/button'
const MomentItemChain = ({item: {id,img,smallImg,icon}}) => {
    const [isHover,setIsHover] = useState(false);
    const handleMouseEnter = () => {
        setIsHover(true)
    };
    const handleMouseLeave = () => {
        setIsHover(false)
    }
    return (
        <CarouselItem onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  className=" basis-1/6" >
            <a href={img}  className={`glightbox3 relative w-full`}>
                <img src={smallImg} className='rounded-2xl' />
                <div className={`bg-dark w-full h-full  rounded-2xl absolute flex justify-center items-center top-0 opacity-0 ${isHover && "opacity-100 duration-200" }`}>
                    <Button >{icon}</Button>
                </div>
            </a>
        </CarouselItem>
    )
}

export default MomentItemChain