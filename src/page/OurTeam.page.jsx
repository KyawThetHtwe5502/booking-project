import React from 'react'
import NavContactComponents from '../components/nav/NavContact.components'
import { BookingOurTeam, HeroSectionOurTeam, MembersOurTeam } from './ourTeam'
import FooterComponents from '../components/footer/Footer.components'

const OurTeamPage = () => {
  return (
    <div>
        <NavContactComponents/>
        <HeroSectionOurTeam/>
        <MembersOurTeam/>
        <BookingOurTeam/>
        <FooterComponents/>
    </div>
  )
}

export default OurTeamPage