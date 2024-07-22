import React from 'react'
import { Badge } from "../../components/ui/badge"
import { FaStar, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Button } from "../../components/ui/button";

const MembersOurTeam = () => {
  const members = [
    {
      id: 1,
      image: "member-1.jpg",
      name: "Dennis Barrett",
      position: "UK Tourist Guide"
    },
    {
      id: 2,
      image: "member-2.jpg",
      name: "Jacqueline Miller",
      position: "Us Tourist Guide"
    },
    {
      id: 3,
      image: "member-3.jpg",
      name: "Larry Lawson",
      position: "Editor in Chief"
    },
    {
      id: 4,
      image: "member-4.jpg",
      name: "Louis Ferguson",
      position: "CEO & Founder"
    },
    {
      id: 5,
      image: "member-5.jpg",
      name: "Louis Crawford",
      position: "Editor, Coverage"
    },
    {
      id: 6,
      image: "member-6.jpg",
      name: "Frances Guerrero",
      position: "Managing Editor"
    },
    {
      id: 7,
      image: "member-7.jpg",
      name: "Amanda Reed",
      position: "Managing Editor"
    },
    {
      id: 8,
      image: "member-8.jpg",
      name: "Samuel Bishop",
      position: "Co-Founder"
    },
    {
      id: 9,
      image: "member-9.jpg",
      name: "Lori Stevens",
      position: "Managing Editor"
    },
    {
      id: 10,
      image: "member-10.jpg",
      name: "Billy Vasquez",
      position: "CTO"
    }
  ];
  return (
    <section id='wy' className='container mx-auto'>
      <div className='grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-x-4'>
      {members.map(i => <div key={i.id} className='rounded-xl group inline-block mb-5'>
        <div className='relative mb-1 rounded-xl inline-block overflow-hidden'>
          <img src={i.image} className='duration-300 group-hover:scale-[1.02]' alt="" />
          <Badge className={"bg-white absolute top-[5%] left-[5%] gap-x-2 font-normal rounded-md text-gray-800 text-sm"}>
            <FaStar className='text-warning text-base' /> 4.3
          </Badge>
          <div className='absolute top-[80%] left-[5%] opacity-0 duration-300 transition-all group-hover:opacity-100'>
            <Button className="rounded-r-none rounded-s-lg bg-white hover:bg-accent">
              <FaFacebookF className='text-[#5d82d1]' />
            </Button>
            <Button className="rounded-none bg-white hover:bg-accent ">
              <FaInstagram className='text-[#c22b72]' />
            </Button>
            <Button className="rounded-s-none rounded-r-lg bg-white hover:bg-accent ">
              <FaTwitter className='text-[#40bff5]' />
            </Button>
          </div>
        </div>
        <div className='p-2'>
          <h3 className='text-xl font-heading font-bold hover:text-blue-700 duration-300'>{i.name}</h3>
          <span className='text-gray-500 dark:text-gray-400'>{i.position}</span>
        </div>
      </div>)}
      </div>
    </section>
  )
}

export default MembersOurTeam