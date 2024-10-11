import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ChainPage, ContactPage, HomePage, OurTeamPage } from './page'
import NotFoundPage from './page/NotFound.page'


const App = () => {
  return (
    <div className='dark:bg-darkBg '>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/hotel-chain' element={<ChainPage/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/team' element={<OurTeamPage/>} />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
    </div>
  )
}

export default App