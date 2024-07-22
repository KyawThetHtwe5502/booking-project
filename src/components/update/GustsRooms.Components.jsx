"use client"

import * as React from "react"



import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { BsPlusCircle ,BsDashCircle  } from "react-icons/bs";


import { BsPerson } from "react-icons/bs";




export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false)
  const [gust,setGust] = React.useState({adult: 2, child: 0})
  const [room,setRoom] = React.useState(1)
  const addAdult = () => {
    setGust({...gust,adult: gust.adult+1})
  }
  const removeAdult = () => {
    gust.adult > 0 && setGust({...gust, adult: gust.adult-1})
  }

  const addChild = () => {
    setGust({...gust, child: gust.child + 1})
  }

  const addRoom = () => {
    setRoom((pre) => pre + 1)
  }

  const removeRoom = () => {
    room > 0 && setRoom((pre) => pre -1)
  }

  const removeChild = () => {
    gust.child > 0  && setGust({...gust, child: gust.child - 1})
  }

  return (
    <div className="flex items-center md:w-full  gap-x-2 xl:mr-6">
      <BsPerson className="text-4xl text-gray-500 dark:text-gray-400" />

      <Popover className="" open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="md:w-full w-full" >
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="xl:w-[220px] w-full md:w-full flex justify-between dark:text-gray-200 dark:bg-[#191B1D] dark:hover:bg-opacity-100] text-base hover:bg-white py-7 relative border border-gray-400"
        >
          <h3 className="absolute top-0 -translate-y-4 z-[10] dark:bg-[#191B1D] text-base dark:text-gray-300 bg-white text-gray-500 font-normal px-2 ">Gusts & rooms</h3>

           {gust.adult + gust.child} Gusts {room} Rooms
        </Button>
      </PopoverTrigger>
      <PopoverContent className="xl:w-[250px]   p-0 bg-white hover:bg-white dark:bg-[#191B1D] active:bg-white">
        <Command className="bg-white dark:bg-[#191B1D]">
          
          <CommandList >
            
            <CommandGroup >
              <CommandItem className="flex items-center justify-between bg-white dark:bg-[#191B1D]  hover:bg-white">
                <div>
                  <h1 className="font-heading text-base font-bold">Adults</h1>
                  <p>Ages 13 or above</p>
                </div>
                <span className="flex items-center gap-x-3 ">
                <BsDashCircle className="text-xl text-blue-400" onClick={removeAdult}/>
                 <span className="text-base font-bold w-4">{gust.adult}</span>
                <BsPlusCircle className="text-xl text-blue-400" onClick={addAdult} />
                </span>
              </CommandItem>
              <CommandItem className="flex items-center justify-between bg-white dark:bg-[#191B1D]  hover:bg-white">
                <div>
                  <h1 className="font-heading text-base  font-bold">Child</h1>
                  <p>Ages 13 below</p>
                </div>
                <span className="flex items-center gap-x-3 ">
                <BsDashCircle className="text-xl text-blue-400" onClick={removeChild} />
                 <span className="text-base font-bold w-4">{gust.child}</span>
                <BsPlusCircle className="text-xl text-blue-400" onClick={addChild} />
                </span>
              </CommandItem>
              <CommandItem className="flex items-center justify-between bg-white dark:bg-[#191B1D]  hover:bg-white">
                <div>
                  <h1 className="font-heading text-base font-bold">Rooms</h1>
                  <p>max room 8</p>
                </div>
                <span className="flex items-center gap-x-3 ">
                <BsDashCircle className="text-xl text-blue-400" onClick={removeRoom}/>
                 <span className="text-base font-bold w-4">{room}</span>
                <BsPlusCircle className="text-xl text-blue-400" onClick={addRoom}/>
                </span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
    </div>
  )
}
