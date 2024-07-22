"use client"

import * as React from "react"
import { SlLocationPin } from "react-icons/sl";
import {Button} from "../ui/button"

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

const frameworks = [
  {
    value: "San Jacinto, USA",
    label: "San Jacinto, USA",
  },
  {
    value: "North Dakoto, Canada",
    label: "North Dakoto, Canada",
  },
  {
    value: "West Virginia, Paris",
    label: "West Virginia, Paris",
  }
]

export function ComboboxComponents() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (

    <div className="flex items-center gap-x-2">
      <SlLocationPin className="text-4xl text-gray-500 dark:text-gray-400" />
      <Popover  open={open} onOpenChange={setOpen}>

        <PopoverTrigger className="dark:bg-opacity-0 md:w-full w-full" >
          
            
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className=" xl:w-[220px] lg:w-[220px] flex justify-between  w-full relative border border-gray-400 text-base font-normal py-7 hover:bg-white text-gray-500 dark:text-gray-400 dark:bg-[#191B1D] dark:hover:bg-opacity-100"
            >
              <h3 className="absolute top-0 -translate-y-4 z-[10] bg-white dark:bg-[#191B1D] px-2 font-normal text-gray-500 dark:text-gray-300">Location</h3>
              {frameworks.find((framework) => framework.value === value)?.value
                ? frameworks.find((framework) => framework.value === value)?.label
                : "Select Location"}

            </Button>
          

        </PopoverTrigger>
        <PopoverContent className="md:w-full  lg:w-[200px] xl:w-[200px] p-0 ">
          <Command className="md:w-full">

            <CommandInput className="md:w-full" placeholder="Search framework..." />
            <CommandList>
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                <CommandItem className="flex items-center" value="Select Location" onSelect={() => {
                  setValue("Selection Location")
                  setOpen(false)

                }}>Select Location</CommandItem>
                {frameworks.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "Select Location" : currentValue)
                      setOpen(false)
                    }}
                  >


                    {framework.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
