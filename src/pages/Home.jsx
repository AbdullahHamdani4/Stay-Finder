import React from 'react'
import Navbar from "../components/Navbar.jsx"
import HeroSection from "../components/hero.jsx"
import PopularDestinations from "../components/popularDestination.jsx"
import {FeaturedStays} from "../components/featuredStays.jsx"
import Footer from "../components/footer.jsx"
const Home = () => {
  return (
   <>
    <Navbar/>
  <HeroSection/>
  <PopularDestinations/>
  <FeaturedStays/>
  <Footer/>
   </>
  )
}

export default Home