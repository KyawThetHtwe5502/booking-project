import React from 'react'
import { BsTelephone, BsEnvelope } from "react-icons/bs";
import { FaHotel, FaCar, FaEarthAmericas, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
import { MdFlight } from "react-icons/md";
import {Button} from "../ui/button"

const FooterComponents = () => {
  const links = ["Flights", "Hotels", "Tours", "Cabs", "About", "Contact us", "Blogs", "Services", "Detail page", "Services", "Policy", "Testimonials", "Newsletters", "Podcasts", "Protests", "NewsCyber", "Education", "Sports", "Tech and Auto", "Opinion", "Share Market"]
  return (
    <section className='bg-[#0B0A12]'>

      <div className='container mx-auto  py-5'>
        <div className='grid grid-cols-12 text-white mt-7 mb-14'>
          <div className='col-span-4 mr-24'>
            <img className='h-10 mb-5' src="logo-light.svg" alt="" />
            <p className='text-gray-300 mb-3'>Departure defective arranging rapturous did believe him all had supported.</p>
            <ul className='space-y-2'>
              <li><a href="" className='flex items-center gap-x-2 text-gray-200'>

                <BsTelephone /> +1234 468 963</a></li>
              <li><a href="" className='flex items-center text-gray-300 gap-x-2'>
                <BsEnvelope /> example@gmail.com</a></li>
            </ul>
          </div>
          <div className='col-span-2'>
            <h3 className='text-xl font-heading font-bold mb-8'>Page</h3>
            <ul className='space-y-2 text-gray-300'>
              <li> <a href="">About us</a></li>
              <li> <a href="">Contact us</a></li>
              <li> <a href="">News and Blog</a></li>
              <li> <a href="">Meet a Team</a></li>
            </ul>
          </div>
          <div className='col-span-2'>
            <h3 className='text-xl font-heading font-bold mb-8'>Link</h3>
            <ul className='space-y-2 text-gray-300'>
              <li> <a href="">Sign up</a></li>
              <li> <a href="">Sign in</a></li>
              <li> <a href="">Privacy Policy</a></li>
              <li> <a href="">Terms</a></li>
              <li> <a href="">Cookie</a></li>
              <li> <a href="">Support</a></li>
            </ul>
          </div>
          <div className='col-span-2'>
            <h3 className='text-xl font-heading font-bold mb-8'>Global Site</h3>
            <ul className='space-y-2 text-gray-300'>
              <li><a href="">India</a></li>
              <li><a href="">California</a></li>
              <li><a href="">Indonesia</a></li>
              <li><a href="">Canada</a></li>
              <li><a href="">Malaysia</a></li>
              <li><a href=""></a></li>
            </ul>
          </div>
          <div className='col-span-2'>
            <h3 className='text-xl font-bold font-heading mb-8'>Booking</h3>
            <ul className='space-y-2 text-gray-300'>
              <li><a href="" className='flex  gap-x-2 '>
                <FaHotel /> Hotel</a></li>
              <li><a href="" className='flex gap-x-2'>
                <MdFlight className='rotate-90 text-xl'/> Flight</a></li>
              <li><a href="" className='flex gap-x-2'>
                <FaEarthAmericas /> Tour</a></li>
              <li><a href="" className='flex gap-x-2'>
                <FaCar /> Cab</a></li>
            </ul>
          </div>
        </div>
        {/* top link */}
        <div className='text-white mb-14'>
          <h3 className='text-xl font-heading font-bold mb-3'>Top Links</h3>
          <ul className='flex flex-wrap leading-8 gap-x-4 text-gray-300'>
            {links.map(i =>
              <li key={i.id}>
                <a href="#">{i}</a>
              </li>
            )}
          </ul>
        </div>
        <div className='flex justify-between items-center text-white'>
          <div>
            <h3 className='text-xl font-heading font-bold mb-4'>Payment & Security</h3>
            <ul className='flex items-center gap-3'>
              <li><a href="">
                <img src="paypal.svg"  className='max-w-full h-[30px]' alt="" /></a></li>
              <li><a href="">
                <img src="visa.svg" className='max-w-full h-[30px]' alt="" /></a></li>
              <li><a href="">
                <img src="mastercard.svg" className='max-w-full h-[30px]'  alt="" /></a></li>
              <li><a href="">
                <img src="expresscard.svg" className='max-w-full h-[30px]' alt="" /></a></li>
            </ul>
          </div>
          <div className=''>
            <h3 className='text-xl font-heading font-bold mb-4'>Follow us on</h3>
            <ul className='flex items-center gap-x-3'>
              <li className=''>
               <Button className="bg-[#5d82d1] hover:bg-[#5475bc] w-8 h-8"><a href="" className=''>
               <FaFacebookF /></a></Button> </li>
              <li>
                <Button className="w-8 h-8 bg-[#c22b72] hover:bg-[#af2767]">
                <a href="">
                <FaInstagram /></a>
                </Button>
              </li>
              <li>
                <Button className="w-8 h-8 bg-[#40bff5] hover:bg-[#3aacdd]">
                <a href="">
                <FaTwitter /></a>
                </Button>
              </li>
              <li>
                <Button className="w-8 h-8 bg-[#238cc8] hover:bg-[#4136ae]">
                <a href="">
                <FaLinkedinIn /></a>
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <hr className='my-7 opacity-35'/>
        <div className='text-gray-300 flex justify-between items-center'>
          <p>Copyrights ©2024 Booking. Build by 
            <a href="">Webestica.</a>
            
          </p>
          <ul className='flex items-center gap-x-3'>
            <li><a href="">Privacy policy</a></li>
            <li><a href="">Terms and conditions</a></li>
            <li><a href="">ReFund policy</a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default FooterComponents