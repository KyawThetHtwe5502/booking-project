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







const Test = () => {
    return (
        <section className=' container mx-auto scroll-py-20'>
            <div className='relative h-[400px] overflow-hidden bg-slate-300 z-60 rounded-2xl'>


                <div className="absolute z-50 top-0 w-full overflow-hidden rounded-2xl  h-full"  >
                    <div className="bg-[url('bookImg.jpg')] w-[1920px] p-14 py-40">
                        <Card className="  w-[400px] py-5 px-6 rounded-2xl  bg-white ">

                            <CardHeader className="-mb-2">
                                <div className='flex justify-between items-center'>
                                    <h6 className='text-base font-heading font-bold text-blue-700'>Exclusive Offer</h6>
                                    <span className='flex items-center gap-x-1'>
                                        {Array.from({ length: 5 }).map((_, index) => <FaStar className='text-warning' key={index} />)}
                                    </span>
                                </div>
                                <CardTitle className="font-heading leading-tight text-xl">Enjoy Your Dream Vacation In Switzerland</CardTitle>
                                <CardDescription className="text-base">Book your hotel with us and don't forget to grab an awesome hotel deal to save massive on your stay.</CardDescription>
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

                                <Button className="w-full bg-accent rounded-lg text-blue-700 font-bold hover:bg-blue-700 hover:text-white">Book Now</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Test