import React from 'react'
import { Badge } from "@/components/ui/badge"
import { GrLocation } from "react-icons/gr";
import { FaStar } from "react-icons/fa";

const FeatureItemsHome = ({ item: { image, title, price, rate, location } }) => {
  return (
    <div className='group'>
      <div className='rounded-2xl overflow-hidden relative mb-5'>
        <img className=' duration-500 transition group-hover:scale-[1.03]' src={image} />
        <Badge variant="secondary" className="absolute bottom-4 rounded-3xl left-4 text-base inline-flex text-white bg-black gap-x-2">
          <GrLocation />
          {location}</Badge>
      </div>
      <div className="">
        <a href="" className='text-xl group-hover:text-blue-500 duration-300 font-heading font-bold '>
          {title}
        </a>
        <div className='flex justify-between mt-2'>
          <span className='font-bold font-heading text-emerald-500'>
            ${price}<span className='font-normal text-sm'>
              /starting at
            </span>
          </span>
          <p className='flex items-center gap-x-1 font-bold font-sans'>
            {rate} <FaStar className='text-warning text-lg' />
          </p>
        </div>
      </div>
    </div>
  )
}

export default FeatureItemsHome