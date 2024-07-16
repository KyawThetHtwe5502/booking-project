import React from 'react'
import NavChainComponents from '../components/nav/NavChain.components'
import HeroSectionChain from './chain/HeroSection.chain'
import OfferChain from './chain/Offer.chain'
import AboutChain from './chain/About.chain'
import ServiceChain from './chain/Service.chain'
import BookChain from './chain/Book.chain'
import MomentsChain from './chain/Moments.chain'
import FooterComponents from '../components/footer/Footer.components'
import ScrollToTopComponents from '../components/ScrollToTop.components'
import NearPlaceChain from './chain/NearPlace.chain'




const ChainPage = () => {
  return (
    <div>
      <NavChainComponents/>
      <HeroSectionChain/>
      <OfferChain/>
      <AboutChain/>
      <NearPlaceChain/>
      <ServiceChain/>
      <BookChain/>
      <MomentsChain/>
      <FooterComponents/>
      <ScrollToTopComponents/>
    </div>
  )
}

export default ChainPage