import React from 'react'

const ClientsHome = () => {
  return (
    <section className='container mx-auto mt-8 xl:mt-28 md:my-24 lg:my-24'>
        <div className='grid grid-cols-2 gap-7 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 lg:gap-x-20 xl:gap-x-20 p-8 md:p-0 lg:p-0'>
            <img className='col-span-1 duration-200 grayscale hover:grayscale-0' src="client-1.svg" />
            <img className='col-span-1 duration-200 grayscale hover:grayscale-0' src="client-2.svg" />
            <img className='col-span-1 duration-200 grayscale hover:grayscale-0' src="client-3.svg" />
            <img className='col-span-1 duration-200 grayscale hover:grayscale-0' src="client-4.svg" />
            <img className='col-span-1 md:col-start-2 lg:col-start-2 duration-200 grayscale hover:grayscale-0' src="client-5.svg" />
            <img className='col-span-1 md:col-start-3 lg:col-start-3 duration-200 grayscale hover:grayscale-0' src="client-6.svg" />
        </div>
    </section>
  )
}

export default ClientsHome