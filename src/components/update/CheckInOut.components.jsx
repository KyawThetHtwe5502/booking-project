"use client";

import React, { useState } from "react";
import { addDays, format } from "date-fns";

import { BsCalendar } from "react-icons/bs";


import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export function CheckInOutComponents({ className }) {
  const [date, setDate] = useState({
    from: new Date(2022, 8, 19),
    to: addDays(new Date(2022, 8, 19), 9),
  });

  return (

    <div className="flex items-center   gap-x-2">
      <BsCalendar className="text-4xl text-gray-500 dark:text-gray-400"/>
      <div className={cn("grid gap-2 w-full", className)}>

        <Popover className="">

          <PopoverTrigger className="  xl:px-0 lg:px-0 md:px-0">

            <Button
              id="date"
              variant="outline"
              className={cn(
                "xl:w-[220px] lg:w-[220px]  w-full  justify-start text-left hover:bg-white dark:dark:bg-[#191B1D] dark:hover:bg-opacity-100   border-gray-400 py-7 dark:text-gray-300 relative  -z[10] font-sans",
                !date && "text-muted-foreground"
              )}
            >
              <h3 className="absolute top-0 -translate-y-4 z-[10] text-base bg-white dark:text-gray-300 dark:dark:bg-[#191B1D] dark:hover:bg-opacity-100 text-gray-500 font-normal px-2 ">Check in - out</h3>
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "dd LLL")} to{" "}
                    {format(date.to, "dd LLL")}
                  </>
                ) : (
                  format(date.from, "LLL dd, y")
                )
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
