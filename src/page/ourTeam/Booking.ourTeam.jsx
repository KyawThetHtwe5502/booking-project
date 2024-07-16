import React from 'react'
import { Button } from '../../components/ui/button'

const BookingOurTeam = () => {
  return (
    <section className='container mx-auto'>
        <div className='flex items-center justify-between bg-warning bg-opacity-50 rounded-xl p-12'>
            <div className='basis-2/3 '>
                <div className='flex items-start justify-between gap-7 mb-2'>
                <h3 className='text-4xl font-heading font-bold leading-tight'>Let's Enjoy Your Trip With Booking</h3>
                <img className='h-[40px]' src="plane.svg" alt="" />
                </div>
                <p className='pr-5 text-gray-500'>He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy.</p>
            </div>
            <Button className="text-base font-bold h-12 rounded-2xl">
                Book Your Destination
            </Button>
        </div>
    </section>
  )
}

export default BookingOurTeam