import React from 'react';
import { DropdownMenu, DropdownMenuContent,  DropdownMenuTrigger } from '../ui/dropdown-menu';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuTrigger } from '../ui/navigation-menu';

const ChainDrop = () => {
  return (
    <div>
      <div className='flex'>
        {/* Nav item Fin hotel */}
        <NavigationMenu>
        <NavigationMenuItem className='bg-slate-300'>
          <NavigationMenuTrigger>
            Find a hotel
          </NavigationMenuTrigger>
          <NavigationMenuContent className="grid grid-col-12  gap-11 w-[1140px]" >
            
              
                {/* Destination */}
                <div className="col-span-6">
                  <h6 className="mb-3">Destination</h6>
                  <hr className="my-2" />
                  <div>
                    <div className="col-span-6">
                      <ul>
                        <li>New York</li>
                        <li>California</li>
                        <li>New Jersey</li>
                        <li>Canada</li>
                        <li>Las Vegas</li>
                      </ul>
                    </div>
                    <div className="col-span-6">
                      <ul>
                        <li>London</li>
                        <li>Singapore</li>
                        <li>Malaysia</li>
                        <li>Manhattan</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Hotel type */}
                <div className="col-span-3">
                  <h6 className="mb-3">Hotel type</h6>
                  <hr className="my-2" />
                  <ul>
                    <li>All</li>
                    <li>Hotels</li>
                    <li>Villas</li>
                    <li>Palace</li>
                    <li>Resorts</li>
                    <li>Restaurants</li>
                  </ul>
                </div>

                {/* Category */}
                <div className="col-span-3">
                  <h6 className="mb-3">Category</h6>
                  <hr className="my-2" />
                  <ul >
                    <li> Beach</li>
                    <li> City</li>
                    <li> Spa</li>
                    <li> Wildlife</li>
                    <li> Golf</li>
                    <li> Heritage</li>
                  </ul>
                </div>

                {/* Action box */}
                <div className="col-span-12">
                  <div>
                    <div className=" bg-dark opacity-5"></div>
                    <div >
                      {/* Meta */}
                      <div>
                        <h5 className="">Enjoy Great Times with us</h5>
                        <ul>
                          <li className=" ">Get 1000 bonus points on every stay</li>
                          <li className=" ">Earn through Dec 15</li>
                          <li className=" ">Redeem for free night and more</li>
                        </ul>
                      </div>
                      {/* Button */}
                      <a href="#" className=" mb-0">Register Now</a>
                    </div>
                  </div>
                </div>
              
            
          </NavigationMenuContent>
        </NavigationMenuItem>
        </NavigationMenu>

        {/* Nav item Facilities */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            Hotel Facilities
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            Banquet
            Conference and meeting
            Fitness room
            Health club
            Sauna and steam bath
            Luggage storage
            Summer terrace
            Non-smoking rooms
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default ChainDrop;
