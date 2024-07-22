import React, { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { FaBars, FaXmark } from "react-icons/fa6";



const ContactMobileComponents = ({ children, ...props }) => {

  return (
    <DropdownMenu >
      <DropdownMenuTrigger className='bg-white  dark:bg-darkBg border-none outline-none overflow-hidden rounded-md focus-within:ring-0 inline-block data-[state=open]:hidden' >
        <FaBars className='text-2xl font-medium' />
      </DropdownMenuTrigger>
      <DropdownMenuTrigger className='bg-white dark:bg-darkBg border-none outline-none overflow-hidden rounded-md focus-within:ring-0 hidden  data-[state=open]:inline-block' >
        <FaXmark className='text-2xl font-medium' />
      </DropdownMenuTrigger>

      <DropdownMenuContent {...props}>
        {children}

      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ContactMobileComponents