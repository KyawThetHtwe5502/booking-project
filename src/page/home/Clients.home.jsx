import React from 'react'

const ClientsHome = () => {
  return (
    <section className='container mx-auto mt-28'>
        <div className='grid grid-cols-6 gap-x-20'>
            <img className='col-span-1 duration-200 grayscale hover:grayscale-0' src="client-1.svg" />
            <img className='col-span-1 duration-200 grayscale hover:grayscale-0' src="client-2.svg" />
            <img className='col-span-1 duration-200 grayscale hover:grayscale-0' src="client-3.svg" />
            <img className='col-span-1 duration-200 grayscale hover:grayscale-0' src="client-4.svg" />
            <img className='col-span-1 duration-200 grayscale hover:grayscale-0' src="client-5.svg" />
            <img className='col-span-1 duration-200 grayscale hover:grayscale-0' src="client-6.svg" />
        </div>
    </section>
  )
}

export default ClientsHome