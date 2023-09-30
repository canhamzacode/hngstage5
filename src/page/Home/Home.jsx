import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Hero from '../../Components/Hero/Hero'
import Features from '../../Components/Features/Features'
import How from '../../Components/How/How'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div className='w-full'>
      <NavBar/>
      <Hero/>
      <Features/>
      <How/>
      <Footer/>
    </div>
  )
}

export default Home