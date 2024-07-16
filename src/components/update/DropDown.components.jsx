import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "../../components/ui/dropdown-menu"



const DropDownComponents = ({button,children,...props}) => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger className='bg-white border-none outline-none overflow-hidden rounded-md focus-within:ring-0' >
          {button}
        </DropdownMenuTrigger>
        <DropdownMenuContent {...props}>
          {children}
          
        </DropdownMenuContent>
      </DropdownMenu>
  )
}

export default DropDownComponents