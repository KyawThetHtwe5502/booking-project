import React, { useEffect, useState } from 'react'
import DropDownComponents from '../update/DropDown.components'
import { Button } from "@/components/ui/button"
import { BsCircleHalf, BsBrightnessHighFill, BsMoonStarsFill, BsSearch } from "react-icons/bs";
import { Input } from "@/components/ui/input"
import NavigationComponents from '../update/Navigation.components';
import { FaRightToBracket } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const NavContactComponents = () => {
  const [fixedNav, setFixedNav] = useState(false);

  useEffect(() => {
    const waypoint = new Waypoint({
      element: document.getElementById('wy'),
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
    <section className={`${fixedNav && "fixed-nav"} w-full py-2  bg-white z-[100]`}>
      <div className={`container mx-auto `}>
        <div className='flex items-center w-full'>
          <div className=''>
            <img className='w-32' src="logo.svg" />
          </div>
          <div className='flex-grow'>
            <div className='flex justify-center items-center'>
              <div className='flex items-center gap-x-2'>
                <NavigationComponents item="Hotel"   >
                  <Button className="bg-white text-slate-800 hover:bg-accent hover:text-blue-600 w-full pr-20">Hotel Home</Button>
                  <NavLink to={"/hotel-chain"}>
                    <Button className=" bg-white text-slate-800 hover:bg-accent hover:text-blue-600 w-full pr-20">Hotel Chain</Button></NavLink>
                </NavigationComponents>
                <NavigationComponents item="Pages">
                  <NavLink to={"/contact"} >
                    <Button className="bg-white text-slate-800 hover:bg-accent hover:text-blue-600 w-full  pr-24">Contact</Button>
                  </NavLink>
                  <NavLink to="/team">
                  <Button className=" bg-white text-slate-800 hover:bg-accent hover:text-blue-600 w-full pr-20">Our Team</Button>
                  </NavLink>
                </NavigationComponents>

              </div>
            </div>
          </div>

          <div className=''>
            <div className='flex items-center gap-x-4'>


              <DropDownComponents className="max-w-[5rem]" button={
                <BsCircleHalf className='text-warning text-xl' />} >
                <Button className="bg-white inline-flex gap-x-2 text-slate-800 hover:bg-accent hover:text-blue-600 w-full text-base">
                  <BsBrightnessHighFill />
                  Light
                </Button>
                <Button className="bg-white inline-flex gap-x-2 text-slate-800 hover:bg-accent hover:text-blue-600 w-full text-base">
                  <BsMoonStarsFill />
                  Dark
                </Button>
                <Button className="bg-white inline-flex gap-x-2 text-slate-800 hover:bg-accent hover:text-blue-600 w-full text-base">
                  <BsCircleHalf />
                  Auto
                </Button>
              </DropDownComponents>
              <DropDownComponents button={<BsSearch className='text-xl text-gray-500 hover:text-blue-700 duration-200' />} >
                <div className="flex w-full max-w-sm items-center">
                  <Input type="text" placeholder="Search..." className="border border-blue-700 rounded-r-none text-base rounded-l-lg focus-visible:ring-0" />
                  <Button type="submit" className="rounded-l-none bg-blue-700 font-bold rounded-r-lg text-base">Search</Button>
                </div>

              </DropDownComponents>
              <Button className="h-9 bg-blue-700 gap-x-2">
                <FaRightToBracket /> Sign up
              </Button>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default NavContactComponents