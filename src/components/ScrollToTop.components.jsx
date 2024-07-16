import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { FaArrowUpLong } from "react-icons/fa6";

const ScrollToTopComponents = () => {
    const [isVisible,setIsVisible] = useState(false)
    const handleScroll = () => {
        if(window.scrollY > 800){
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll",handleScroll)
        
    },[])
  return (
    <Button className={`fixed w-[52px] h-[52px] bg-blue-600 right-10 bottom-10 opacity-0 ${isVisible && "opacity-100"}`}>
        <FaArrowUpLong/>
    </Button>
  )
}

export default ScrollToTopComponents