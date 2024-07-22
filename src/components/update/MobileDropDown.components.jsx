import React, { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { FaBars, FaXmark } from "react-icons/fa6";



const MobileDropDownComponents = ({ children, ...props }) => {

  return (
    <DropdownMenu >
      <DropdownMenuTrigger className='bg-white  dark:bg-darkBg border-none outline-none overflow-hidden rounded-md focus-within:ring-0 inline-flex items-center gap-x-1 data-[state=open]:hidden' >
        <FaBars className='text-2xl font-medium' /> <span className='text-lg hidden md:inline-block lg:inline-block'>Menu</span>
      </DropdownMenuTrigger>
      <DropdownMenuTrigger className='bg-white dark:bg-darkBg border-none outline-none overflow-hidden rounded-md focus-within:ring-0 hidden  data-[state=open]:inline-flex items-center gap-x-1' >
        <FaXmark className='text-2xl ' /> <span className='text-lg hidden md:inline-block lg:inline-block'>Menu</span>
      </DropdownMenuTrigger>

      <DropdownMenuContent {...props}>
        {children}

      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MobileDropDownComponents