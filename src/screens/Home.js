import React from 'react'
import TopNav from '../components/Navbar/TopNav'
import Maintop from '../components/MainContent/Maintop'
import MidContent from '../components/MainContent/MidContent'
import ForumIcon from '@material-ui/icons/Forum'
import FooterTop from '../components/footer/FooterTop'
const Home = () => {
  return (
    <div className='home-container'>
      <div className='message-box'>
        <ForumIcon />
        Messages
      </div>
      <TopNav />
      <Maintop />
      <MidContent />

      <FooterTop />
    </div>
  )
}

export default Home
