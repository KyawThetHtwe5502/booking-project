import React from 'react'
import HeroSectionContact from './contact/HeroSection.contact'
import FormSectionContact from './contact/FormSection.contact'
import MapSectionContact from './contact/MapSection.contact'
import NavContactComponents from '../components/nav/NavContact.components'
import HeaderSectionComponents from '../components/HeaderSection.components'
import FooterComponents from '../components/footer/Footer.components'
import ScrollToTopComponents from '../components/ScrollToTop.components'

const ContactPage = () => {
  return (
    <div>
        <NavContactComponents/>
        <HeaderSectionComponents/>
        <HeroSectionContact/>
        <FormSectionContact/>
        <MapSectionContact/>
        <FooterComponents/>
        <ScrollToTopComponents/>
    </div>
  )
}

export default ContactPage