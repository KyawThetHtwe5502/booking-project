import React from 'react'
import { BsGlobe } from "react-icons/bs";
import DropDownComponents from '../update/DropDown.components';
import { Button } from '../ui/button';
import { BsCircleHalf, BsBrightnessHighFill, BsMoonStarsFill } from "react-icons/bs";

import ChainDrop from '../update/ChainDrop';
import { NavigationMenuDemo } from '../update/ChainComponents';



const NavChainComponents = () => {
  
  return (
    <section>
      <div className='container mx-auto'>
        <div className='flex justify-between'>
          <img className='h-[60px]' src="logo-hotel.svg" alt="" />
          <div>
            <div>
              <DropDownComponents className="max-w-[9rem]" button={<Button className="flex gap-x-2 bg-white text-gray-700 hover:bg-white"><BsGlobe />Language </Button>}>

                <Button className="bg-white inline-flex gap-x-2 text-slate-800 hover:bg-accent hover:text-blue-600 w-full ">
                  <img src="uk.svg" className='w-[20px]' alt="" />
                  English
                </Button>
                <Button className="bg-white inline-flex gap-x-2 text-slate-800 hover:bg-accent hover:text-blue-600 w-full ">
                  <img src="sp.svg" className='w-[20px]' alt="" />
                  Español
                </Button>
                <Button className="bg-white inline-flex gap-x-2 text-slate-800 hover:bg-accent hover:text-blue-600 w-full ">
                  <img src="fr.svg" className='w-[20px]' alt="" />
                  Français
                </Button>
                <Button className="bg-white inline-flex gap-x-2 text-slate-800 hover:bg-accent hover:text-blue-600 w-full ">
                  <img src="gr.svg" className='w-[20px]' alt="" />
                  Deutsch
                </Button>
              </DropDownComponents>

              <DropDownComponents className="max-w-[5rem]" button={
                <BsCircleHalf className='text-warning text-xl' />} >
                <Button className="bg-white inline-flex gap-x-2 text-slate-800 hover:bg-accent hover:text-blue-600 w-full ">
                  <BsBrightnessHighFill/>
                  Light
                </Button>
                <Button className="bg-white inline-flex gap-x-2 text-slate-800 hover:bg-accent hover:text-blue-600 w-full ">
                  <BsMoonStarsFill/>
                  Dark
                </Button>
                <Button className="bg-white inline-flex gap-x-2 text-slate-800 hover:bg-accent hover:text-blue-600 w-full ">
                  <BsCircleHalf/>
                  Auto
                </Button>
              </DropDownComponents>
            </div>

            <div>
              {/* <NavigationComponents item={"Find a hotel"} >
                <div className='grid grid-cols-4 gap-16'>
                <span className='col-span-2'>
                  <h3>Destination</h3>
                  <hr />
                  <ul className='flex flex-col'>
                    <li><NavigationMenuItem>New York</NavigationMenuItem></li>
                    <li><NavigationMenuItem>California</NavigationMenuItem></li>
                    <li><NavigationMenuItem>New Jersey</NavigationMenuItem></li>
                    <li><NavigationMenuItem>Canada</NavigationMenuItem></li>
                    <li><NavigationMenuItem>Las vegas</NavigationMenuItem></li>
                  </ul>
                  <ul className='flex flex-col'>
                    <li><NavigationMenuItem>London</NavigationMenuItem></li>
                    <li><NavigationMenuItem>Singapore</NavigationMenuItem></li>
                    <li><NavigationMenuItem>Malaysia</NavigationMenuItem></li>
                    <li><NavigationMenuItem>manhattan</NavigationMenuItem></li>
                  </ul>
                </span>
                <span className='col-span-1'>
                  <h6>Hotel type</h6>
                  <hr />
                  <ul>
                    <li><NavigationMenuItem>All</NavigationMenuItem></li>
                    <li><NavigationMenuItem>Hotels</NavigationMenuItem></li>
                    <li><NavigationMenuItem>Villas</NavigationMenuItem></li>
                    <li><NavigationMenuItem>Palace</NavigationMenuItem></li>
                    <li><NavigationMenuItem>Resorts</NavigationMenuItem></li>
                    <li><NavigationMenuItem>Restaurants</NavigationMenuItem></li>
                  </ul>
                </span>
                <span className='col-span-1'>
                  <h6>category</h6>
                </span>
                <span className='col-span-4'></span>
                </div>
              </NavigationComponents> */}
              {/* <ChainDrop/> */}
              <NavigationMenuDemo/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NavChainComponents