import React from 'react'
import NavContactComponents from '../components/nav/NavContact.components'
import { BookingOurTeam, HeroSectionOurTeam, MembersOurTeam } from './ourTeam'
import FooterComponents from '../components/footer/Footer.components'
import HeaderSectionComponents from '../components/HeaderSection.components'

const OurTeamPage = () => {
  return (
    <div>
        <NavContactComponents/>
        <HeaderSectionComponents/>
        <HeroSectionOurTeam/>
        <MembersOurTeam/>
        <BookingOurTeam/>
        <FooterComponents/>
    </div>
  )
}

export default OurTeamPage