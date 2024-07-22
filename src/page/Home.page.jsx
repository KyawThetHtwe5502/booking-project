import React from 'react'
import NavComponents from '../components/nav/Nav.components'
import HeroSectionHome from './home/HeroSection.home'
import FirstCarouselHome from './home/FirstCarousel.home'

import ServiceHome from './home/Service.home'
import FeaturesHome from './home/Features.home'
import ClientsHome from './home/Clients.home'
import TestimonialsHome from './home/Testimonials.home'
import NearHotelHome from './home/NearHotel.home'
import DownloadAppHome from './home/DownloadApp.home'
import FooterComponents from '../components/footer/Footer.components'
import ScrollToTopComponents from '../components/ScrollToTop.components'
import HeaderSectionComponents from '../components/HeaderSection.components'


const HomePage = () => {
  return (
    <div className='overflow-hidden'>
        <NavComponents/>
        <HeaderSectionComponents/>
        <HeroSectionHome/>
        <FirstCarouselHome/>
        <ServiceHome/>
        <FeaturesHome/> 
        <ClientsHome/>
        <TestimonialsHome/>
        <NearHotelHome/>
        <DownloadAppHome/>
        <FooterComponents/>
        <ScrollToTopComponents/>        
    </div>
  )
}

export default HomePage