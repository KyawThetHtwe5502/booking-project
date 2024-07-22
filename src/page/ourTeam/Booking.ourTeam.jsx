import React from 'react'
import { Button } from '../../components/ui/button'

const BookingOurTeam = () => {
  return (
    <section className='container mx-auto py-12'>
        <div className=' lg:flex xl:flex items-center justify-between bg-warning bg-opacity-50 rounded-xl p-6 md:p-14 lg:p-12 xl:p-12'>
            <div className='basis-2/3 mb-3'>
                <div className='flex items-start justify-between xl:gap-x-14 mb-2'>
                <h3 className='text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-heading font-bold leading-tight '>Let's Enjoy Your Trip With Booking</h3>
                <img className='h-[40px]' src="plane.svg" alt="" />
                </div>
                <p className='pr xl:pr-5 text-gray-500 dark:text-gray-400'>He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy.</p>
            </div>
            <Button className="text-base font-bold h-12  rounded-2xl dark:bg-[#0b0a12] dark:text-white dark:hover:bg-gray-900">
                Book Your Destination
            </Button>
        </div>
    </section>
  )
}

export default BookingOurTeam