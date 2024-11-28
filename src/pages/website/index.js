import React from 'react'
import TopBar from '../../components/website/layout/TopBar'
import Navbar from '../../components/website/layout/Navbar'
import HeroSection from '../../components/website/hero-section'
import Products from '../../components/website/products'
import Footer from '../../components/website/layout/Footer'

export default function Home({onLoginClick}) {
  return (
    <div>
        <TopBar />
        <Navbar onLoginClick={onLoginClick} />
        <HeroSection />
        <Products />
        <Footer />
    </div>
  )
}
