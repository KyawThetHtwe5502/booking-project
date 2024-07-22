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
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
    useEffect(() => {
        window.addEventListener("scroll",handleScroll)
        return () => {
        window.removeEventListener("scroll",handleScroll)
            
        }
    },[])
  return (
    
        <Button onClick={scrollToTop} className={`fixed w-[52px] h-[52px] bg-blue-600 hover:bg-blue-700 right-10 bottom-10 opacity-0 ${isVisible && "opacity-100"}`}>
        <FaArrowUpLong/>
    </Button>
    
  )
}

export default ScrollToTopComponents