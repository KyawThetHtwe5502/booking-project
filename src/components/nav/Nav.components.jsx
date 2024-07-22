import React, { useEffect, useState } from 'react'

import DropDownComponents from '../update/DropDown.components'
import { DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "../../components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Label } from "../ui/label"
import { FaHotel, FaEarthAmericas, FaCar, FaPlane, FaBars, FaXmark } from "react-icons/fa6";
import { BsBell, BsInfoCircle, BsPower, BsMoonStars, BsCircleHalf, BsGear, BsSun, BsFillGrid3X3GapFill } from "react-icons/bs";

import NavigationComponents from '../update/Navigation.components';
import { Badge } from '../ui/badge';
import { CiBookmarkCheck, CiHeart } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import MobileDropDownComponents from '../update/MobileDropDown.components';
import { useTheme } from '../../contexts/themecontext'





const NavComponents = () => {
  const [fixedNav, setFixedNav] = useState(false);
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const waypoint = new Waypoint({
      element: document.getElementById('waypoint'),
      handler: function (direction) {
        if (direction === "down") {
          setFixedNav(true)
        } else {
          setFixedNav(false)
        }
      }
    })



  }, [])
  return (
    <section className={`${fixedNav && "fixed-nav"} w-full py-2  dark:bg-darkBg bg-white z-[100]`}>
      <div className={`container mx-auto `}>
        <div className='flex justify-between items-center w-full'>
          <div className='flex justify-between items-center gap-x-6'>
            <div>
              <img className='w-32 dark:hidden' src="logo.svg" />
              <img className='w-32 hidden dark:inline-block' src="logo-light.svg" />
            </div>
            <span className='hidden md:inline-block lg:inline-block'>
              <MobileDropDownComponents className="w-[400px] inline-block ">
                <DropdownMenuItem className="w-[400px]">
                  <DropDownComponents button={"Hotel"}   >
                    <NavLink to={"/"}>
                      <Button className="bg-white text-slate-800 hover:bg-accent hover:text-blue-600 w-full pr-20">Hotel Home</Button>
                    </NavLink>
                    <NavLink to={"/hotel-chain"}>
                      <Button className=" bg-white text-slate-800 hover:bg-accent hover:text-blue-600 w-full pr-20">Hotel Chain</Button></NavLink>
                  </DropDownComponents>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <DropDownComponents button="Pages">
                    <NavLink to={"/contact"} >
                      <Button className="bg-white text-slate-800 hover:bg-accent hover:text-blue-600 w-full  pr-24">Contact</Button>
                    </NavLink>
                    <NavLink to={"/team"}>
                      <Button className=" bg-white text-slate-800 hover:bg-accent hover:text-blue-600 w-full pr-20">Our Team</Button>
                    </NavLink>
                  </DropDownComponents>
                </DropdownMenuItem>
              </MobileDropDownComponents>
            </span>
            <div className='hidden xl:flex items-center gap-x-2'>
              <NavigationComponents item="Hotel"   >
                <Button className="bg-white dark:bg-opacity-0 dark:text-gray-400 dark:hover:text-blue-400 text-slate-800 hover:bg-accent  hover:text-blue-600 w-full pr-20">Hotel Home</Button>
                <NavLink to={"/hotel-chain"}>
                  <Button className=" bg-white dark:bg-opacity-0 dark:text-gray-400 dark:hover:text-blue-400 text-slate-800 hover:bg-accent hover:text-blue-600 w-full pr-20">Hotel Chain</Button></NavLink>
              </NavigationComponents>
              <NavigationComponents item="Pages">
                <NavLink to={"/contact"} >
                  <Button className="bg-white dark:bg-opacity-0 dark:text-gray-400 dark:hover:text-blue-400 text-slate-800 hover:bg-accent hover:text-blue-600 w-full  pr-24">Contact</Button>
                </NavLink>
                <NavLink to={"/team"}>
                  <Button className=" bg-white dark:bg-opacity-0 dark:text-gray-400 dark:hover:text-blue-400 text-slate-800 hover:bg-accent hover:text-blue-600 w-full pr-20">Our Team</Button>
                </NavLink>
              </NavigationComponents>

            </div>
          </div>
          <div className='flex items-center gap-x-4'>
            <div className='hidden  xl:flex items-center gap-x-1'>
              <Button className="bg-blue-100 text-blue-600 text-base dark:bg-[#8e85e61a] hover:bg-blue-100">
                <FaHotel className="mr-2 h-4 w-4" /> Hotel
              </Button>
              <Button className="bg-white text-slate-600 dark:text-white text-base dark:bg-darkBg dark:hover:bg-[#8e85e61a] hover:bg-blue-100 hover:text-blue-600 dark:hover:text-blue-600">
                <FaPlane className="mr-2 h-4 w-4 " /> Flight
              </Button>
              <Button className="bg-white text-slate-600 dark:text-white text-base dark:bg-darkBg dark:hover:bg-[#8e85e61a] hover:bg-blue-100 hover:text-blue-600 dark:hover:text-blue-600">
                <FaEarthAmericas className="mr-2 h-4 w-4" /> Tour
              </Button>
              <Button className="bg-white text-slate-600 dark:text-white text-base dark:bg-darkBg dark:hover:bg-[#8e85e61a] hover:bg-blue-100 hover:text-blue-600 dark:hover:text-blue-600">
                <FaCar className="mr-2 h-4 w-4" /> Cab
              </Button>

            </div>
            <div className='flex items-center gap-x-4'>
              <span className='md:hidden lg:hidden xl:hidden'>
                <MobileDropDownComponents className="w-[400px] inline-block ">
                  <DropdownMenuItem className="w-[400px]">
                    <DropDownComponents button={"Hotel"}   >
                      <NavLink to={"/"}>
                        <Button className="bg-white text-slate-800 hover:bg-accent hover:text-blue-600 w-full pr-20">Hotel Home</Button>
                      </NavLink>
                      <NavLink to={"/hotel-chain"}>
                        <Button className=" bg-white text-slate-800 hover:bg-accent hover:text-blue-600 w-full pr-20">Hotel Chain</Button></NavLink>
                    </DropDownComponents>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <DropDownComponents button="Pages">
                      <NavLink to={"/contact"} >
                        <Button className="bg-white text-slate-800 hover:bg-accent hover:text-blue-600 w-full  pr-24">Contact</Button>
                      </NavLink>
                      <NavLink to={"/team"}>
                        <Button className=" bg-white text-slate-800 hover:bg-accent hover:text-blue-600 w-full pr-20">Our Team</Button>
                      </NavLink>
                    </DropDownComponents>
                  </DropdownMenuItem>
                </MobileDropDownComponents>
              </span>
              <span className='xl:hidden'>
                <DropDownComponents className="flex flex-col " button={<span className='inline-flex items-center gap-x-1'><BsFillGrid3X3GapFill className='text-2xl' /> <span className='hidden md:inline-block lg:inline-block text-lg '>Category</span> </span>}>

                  <Button className="bg-blue-100 text-blue-600 text-base dark:bg-[#8e85e61a] hover:bg-blue-100">
                    <FaHotel className="mr-2 h-4 w-4" /> Hotel
                  </Button>
                  <Button className="bg-white text-slate-600 dark:text-white text-base dark:bg-darkBg dark:hover:bg-[#8e85e61a] hover:bg-blue-100 hover:text-blue-600 dark:hover:text-blue-600">
                    <FaPlane className="mr-2 h-4 w-4 " /> Flight
                  </Button>
                  <Button className="bg-white text-slate-600 dark:text-white text-base dark:bg-darkBg dark:hover:bg-[#8e85e61a] hover:bg-blue-100 hover:text-blue-600 dark:hover:text-blue-600">
                    <FaEarthAmericas className="mr-2 h-4 w-4" /> Tour
                  </Button>
                  <Button className="bg-white text-slate-600 dark:text-white text-base dark:bg-darkBg dark:hover:bg-[#8e85e61a] hover:bg-blue-100 hover:text-blue-600 dark:hover:text-blue-600">
                    <FaCar className="mr-2 h-4 w-4" /> Cab
                  </Button>


                </DropDownComponents>
              </span>
              <DropDownComponents button={<div className='bg-white  p-1 relative dark:bg-darkBg '>
                <Button className=" bg-accent hover:bg-accent dark:bg-gray-800 dark:hover:bg-[#464950] dark:text-white text-slate-700   inline-flex gap-x-1 items-center"><BsBell />

                </Button>
                <span className="inline-block absolute  w-2.5 h-2.5 rounded-full top-0 -translate-x-0.5 translate-y-0.5  right-0   bg-red-500  animate-pulse " />
              </div>

              }>
                <DropdownMenuLabel className="flex items-center justify-between p-3">
                  <span className=' flex  items-center gap-x-2 font-heading text-base font-bold'>
                    Notifications
                    <Badge className={"text-sm bg-accent font-normal py-0.3  px-1.5 text-red-500 rounded-md"}>4 new</Badge>
                  </span>
                  <span className='font-normal text-blue-600'>clear all</span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="inline-block p-3 mb-1">
                  <h6 className='font-heading font-bold mb-2'>New! Booking flights from New York ✈️</h6>
                  <p className='text-sm'>Find the flexible ticket on flights around the world. Start searching today</p>
                  <span>wednesday</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="inline-block mb-2">
                  <h6 className='font-heading font-bold mb-2'>Sunshine saving are here 🌞 save 30% or more on a stay</h6>
                  <span className='mb-5'>15 Nov 2022</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="p-4 text-center text-blue-600 font-normal">See all incoming activity</DropdownMenuLabel>
              </DropDownComponents>
              <DropDownComponents button={
                <img className='h-10 w-10 rounded-md' src='./profile.jpg' />
              }>
                <DropdownMenuLabel className="flex items-center gap-x-5">
                  <img className='h-10 w-10 rounded-full' src='./profile.jpg' />
                  <div>
                    <h6 className='text-base font-heading font-bold'>Lori Ferguson</h6>
                    <span className='font-thin'>example@gmail.com</span>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex items-center gap-x-2 px-4 dark:text-gray-300"><CiBookmarkCheck className='text-xl' /> My Bookings</DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-x-2 px-4 dark:text-gray-300"><CiHeart className='text-xl' /> My Wishlist</DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-x-2 px-4 dark:text-gray-300"> <BsGear className='text' />Settings</DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-x-2 px-4 dark:text-gray-300"><BsInfoCircle className='text' /> Help Center</DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-x-2 px-4 dark:text-gray-300"><BsPower className='text' /> Sign Out</DropdownMenuItem>
                <DropdownMenuSeparator />
                <div className='flex justify-between items-center gap-x-4 p-2'>
                  <span>Mode:</span>
                  <span className='space-x-2'>
                    <Button onClick={() => setTheme("light")} className={`bg-white  hover:bg-accent text-lg text-slate-800 hover:text-blue-700 dark:hover:text-blue-400 dark:text-white  dark:bg-opacity-0 dark:hover:bg-[#8e85e61a] ${theme === "light" && "bg-accent text-blue-700"}`}><BsSun /></Button>
                    <Button onClick={() => setTheme("dark")} className={`bg-white  hover:bg-accent text-lg text-slate-800 hover:text-blue-700 dark:text-blue-400     ${theme === "dark" && "bg-[#8e85e61a]"} dark:hover:bg-[#8e85e61a] `}><BsMoonStars /></Button>
                    <Button onClick={() => setTheme("system")} className={`bg-white  hover:bg-accent text-lg text-slate-800 hover:text-blue-700 dark:hover:text-blue-700 dark:text-white  dark:bg-opacity-0 dark:hover:bg-[#8e85e61a] ${theme === "system" && "bg-accent text-blue-700"}`}><BsCircleHalf /></Button>
                  </span>
                </div>

              </DropDownComponents>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NavComponents