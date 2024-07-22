import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FaStar } from "react-icons/fa6";



 
const BookChain = () => {
    return (
        <section className='py-24 container mx-auto'>
            <div className='relative  h-[375.17px] lg:h-[476.95px] xl:h-[476.95px]  md:h-[525.68px] overflow-hidden rounded-2xl'>
                <img src="bookImg.jpg" className='xl:w-[1920px] object-cover w-full h-full ' alt="" />

                <Card className="absolute xl:top-11 top-3 right-4 md:top-12 md:right-12 lg:top-12 lg:right-12 xl:right-[5%] w-[335px] aspect-square  md:w-[365.11px] lg:w-[496px] lg:h-[380px] lg:px-5 lg:py-5  xl:w-[400px] md:px-5 md:py-5 xl:py-5 xl:px-6 rounded-2xl  bg-white dark:bg-darkBg">

                    <CardHeader className="-mb-2">
                        <div className='flex justify-between items-center'>
                            <h6 className='text-base font-heading font-bold text-blue-700'>Exclusive Offer</h6>
                            <span className='flex items-center gap-x-1'>
                                {Array.from({length:5}).map((_,index) => <FaStar className='text-warning' key={index} />)}
                            </span>
                        </div>
                        <CardTitle className="font-heading leading-tight text-xl md:pr-14">Enjoy Your Dream Vacation In Switzerland</CardTitle>
                        <CardDescription className="text-base md:pr-14">Book your hotel with us and don't forget to grab an awesome hotel deal to save massive on your stay.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <span className='font-medium font-heading'>
                        2 Days / 3 Nights

                        </span>
                        <p className='text-gray-500 flex items-center gap-x-1'>
                            <span className='font-bold text-[#0CBC87] text-xl font-heading'>$750</span>
                            <span>/day</span>
                            <span className='line-through '>$1000</span>
                        </p>
                    </CardContent>
                    <CardFooter className="w-full">
                        
                        <Button className="w-full bg-accent text-base rounded-lg text-blue-700 dark:text-blue-500 font-bold hover:bg-blue-700 dark:hover:text-white hover:text-white">Book Now</Button>
                    </CardFooter>
                </Card>
            </div>

        </section>
    )
}

export default BookChain