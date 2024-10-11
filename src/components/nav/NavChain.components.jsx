import React from 'react'
import { BsGlobe } from "react-icons/bs";
import DropDownComponents from '../update/DropDown.components';
import { Button } from '../ui/button';
import { BsCircleHalf, BsBrightnessHighFill, BsMoonStarsFill } from "react-icons/bs";
import { useTheme } from '../../contexts/themecontext'
import { Link } from 'react-router-dom';




const NavChainComponents = () => {
  const { theme, setTheme } = useTheme()

  return (
    <section>
      <div className='container mx-auto py-3'>
        <div className='flex justify-between items-center'>
          <Link to={"/"}>
          <img className='dark:hidden h-[60px]' src="logo-hotel.svg" alt="" />
          <img className='hidden dark:inline-block h-[60px]' src="hotel-light.svg" alt="" />
          </Link>
          <div className=''>
            <div className='flex items-center gap-x-5'>
              <DropDownComponents className="max-w-[9rem]" button={<Button className="flex gap-x-2 bg-white text-gray-700 hover:bg-white dark:bg-gray-700 dark:text-white"><BsGlobe />Language </Button>}>

                <Button className="bg-white inline-flex gap-x-2 dark:bg-opacity-0 dark:text-white dark:hover:text-blue-600 text-slate-800 hover:bg-accent hover:text-blue-600 w-full ">
                  <img src="uk.svg" className='w-[20px]' alt="" />
                  English
                </Button>
                <Button className="bg-white inline-flex dark:bg-opacity-0 dark:text-white dark:hover:text-blue-600 gap-x-2 text-slate-800 hover:bg-accent hover:text-blue-600 w-full ">
                  <img src="sp.svg" className='w-[20px]' alt="" />
                  Español
                </Button>
                <Button className="bg-white inline-flex dark:bg-opacity-0 dark:text-white dark:hover:text-blue-600 gap-x-2 text-slate-800 hover:bg-accent hover:text-blue-600 w-full ">
                  <img src="fr.svg" className='w-[20px]' alt="" />
                  Français
                </Button>
                <Button className="bg-white inline-flex dark:bg-opacity-0 dark:text-white dark:hover:text-blue-600 gap-x-2 text-slate-800 hover:bg-accent hover:text-blue-600 w-full ">
                  <img src="gr.svg" className='w-[20px]' alt="" />
                  Deutsch
                </Button>
              </DropDownComponents>

              <DropDownComponents className="max-w-[5rem]" button={
                <BsCircleHalf className='text-warning text-xl' />} >
                <Button onClick={() => setTheme("light")} className={`bg-white inline-flex gap-x-2 text-slate-800 hover:bg-accent hover:text-blue-600 w-full   dark:hover:text-blue-400 dark:text-white  dark:bg-opacity-0 dark:hover:bg-[#8e85e61a] ${theme === "light" && "bg-accent text-blue-700"}`}>
                  <BsBrightnessHighFill/>
                  Light
                </Button>
                <Button onClick={() => setTheme("dark")} className={`bg-white inline-flex gap-x-2 text-slate-800 hover:bg-accent hover:text-blue-600 w-full   dark:hover:text-blue-400 dark:text-white  dark:bg-opacity-0 dark:hover:bg-[#8e85e61a] ${theme === "dark" && "bg-accent dark:text-blue-700"}`}>
                  <BsMoonStarsFill/>
                  Dark
                </Button>
                <Button onClick={() => setTheme("system")} className={`bg-white inline-flex gap-x-2 text-slate-800 hover:bg-accent hover:text-blue-600 w-full   dark:hover:text-blue-400 dark:text-white  dark:bg-opacity-0 dark:hover:bg-[#8e85e61a] ${theme === "system" && "bg-accent text-blue-700"}`}>
                  <BsCircleHalf/>
                  Auto
                </Button>
              </DropDownComponents>
            </div>

            <div>
              
              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NavChainComponents