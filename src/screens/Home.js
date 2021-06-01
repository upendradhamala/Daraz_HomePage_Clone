import React from 'react'
import TopNav from '../components/Navbar/TopNav'
import Maintop from '../components/MainContent/Maintop'
import MidContent from '../components/MainContent/MidContent'
const Home = () => {
  return (
    <div className='home-container'>
      <TopNav />
      <Maintop />
      <MidContent/>
    </div>
  )
}

export default Home
