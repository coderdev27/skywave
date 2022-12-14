import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Explore from '../../sections/explore/Explore'
import Free from '../../sections/free/Free'
import Hero from '../../sections/hero/Hero'
import Latest from '../../sections/latest/Latest'
import Pitch from '../../sections/pitch/Pitch'
import Setup from '../../sections/setup/Setup'

const Home = () => {
  return (
    <div>
      <Hero />
      <Latest />
      <Free />
      <Explore />
      <Setup />
      <Pitch />
    </div>
  )
}

export default Home