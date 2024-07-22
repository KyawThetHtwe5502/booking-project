import React, { useEffect, useState } from 'react'
import DropDownComponents from '../update/DropDown.components'
import { DropdownMenuItem } from '../ui/dropdown-menu';
import { Button } from "@/components/ui/button"
import { BsCircleHalf, BsBrightnessHighFill, BsMoonStarsFill, BsSearch } from "react-icons/bs";
import { Input } from "@/components/ui/input"
import NavigationComponents from '../update/Navigation.components';
import { FaRightToBracket } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../contexts/themecontext';
import ContactMobileComponents from '../update/ContactMobile.components';


const NavContactComponents = () => {
  const [fixedNav, setFixedNav] = useState(false);
  const { theme, setTheme } = useTheme()

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
    <section className={`${fixedNav && "fixed-nav"} w-full py-2  bg-white  dark:bg-darkBg z-[100]`}>
      <div className={`container mx-auto `}>
        <div className='flex items-center justify-between w-full'>
          <div className=''>
            {theme === "dark" ?
              <img className='w-32' src='logo-light.svg' /> : <img className='w-32' src="logo.svg" />}

          </div>
          <div className='hidden  xl:inline-block flex-grow'>
            <div className='flex justify-center items-center'>
              <div className='flex items-center gap-x-2'>
                <NavigationComponents item="Hotel"   >
                  <NavLink to={"/"}>
                  <Button className="dark:bg-opacity-0 dark:text-gray-300 dark:hover:text-blue-400 bg-white text-slate-800 hover:bg-accent hover:text-blue-600 w-full pr-20">Hotel Home</Button>
                  </NavLink>
                  <NavLink to={"/hotel-chain"}>
                    <Button className="dark:bg-opacity-0 dark:text-gray-300 dark:hover:text-blue-400  bg-white text-slate-800 hover:bg-accent hover:text-blue-600 w-full pr-20">Hotel Chain</Button></NavLink>
                </NavigationComponents>
                <NavigationComponents item="Pages">
                  <NavLink to={"/contact"} >
                    <Button className="dark:bg-opacity-0 dark:text-gray-300 dark:hover:text-blue-400 bg-white text-slate-800 hover:bg-accent hover:text-blue-600 w-full  pr-24">Contact</Button>
                  </NavLink>
                  <NavLink to="/team">
                    <Button className="dark:bg-opacity-0 dark:text-gray-300 dark:hover:text-blue-400  bg-white text-slate-800 hover:bg-accent hover:text-blue-600 w-full pr-20">Our Team</Button>
                  </NavLink>
                </NavigationComponents>

              </div>
            </div>
          </div>

          <div className=''>
            <div className='flex items-center gap-x-4'>
              <span className='xl:hidden'>
                <ContactMobileComponents className="w-[400px] inline-block ">
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
                </ContactMobileComponents>
              </span>

              <DropDownComponents className="max-w-[5rem]" button={
                <BsCircleHalf className='text-warning text-xl' />} >
                <Button onClick={() => setTheme("light")} className={`bg-white inline-flex gap-x-2 text-slate-800 ${theme === "light" && "bg-accent text-blue-500"} hover:bg-accent hover:text-blue-600 w-full text-base dark:bg-opacity-0 dark:text-gray-300 dark:hover:text-blue-400`}>
                  <BsBrightnessHighFill />
                  Light
                </Button>
                <Button onClick={() => setTheme("dark")} className={`bg-white inline-flex gap-x-2 text-slate-800 hover:bg-accent hover:text-blue-600 ${theme === "dark" && "bg-accent text-blue-400"} w-full text-base dark:hover:text-blue-400 `}>
                  <BsMoonStarsFill />
                  Dark
                </Button>
                <Button onClick={() => setTheme("system")} className={`bg-white inline-flex gap-x-2 text-slate-800 hover:bg-accent hover:text-blue-600 ${theme === "system" && "bg-accent text-blue-500"} w-full text-base dark:bg-opacity-0 dark:text-gray-300 dark:hover:text-blue-400`}>
                  <BsCircleHalf />
                  Auto
                </Button>
              </DropDownComponents>
              <DropDownComponents button={<BsSearch className='text-xl text-gray-500 active:text-blue-700 hover:text-blue-700 duration-200' />} >
                <div className="flex w-full max-w-sm items-center">
                  <Input type="text" placeholder="Search..." className="border dark:border-blue-400 border-blue-700 rounded-r-none text-base rounded-l-lg focus-visible:ring-0" />
                  <Button type="submit" className="rounded-l-none dark:bg-blue-400 dark:text-white bg-blue-700 font-bold dark:hover:bg-blue-500 rounded-r-lg text-base">Search</Button>
                </div>

              </DropDownComponents>
              <Button className="h-9 bg-blue-700 dark:text-white font-bold dark:bg-blue-400 dark:hover:bg-blue-500 gap-x-2">
                <FaRightToBracket /> <span className='hidden xl:inline'>Sign up</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default NavContactComponents