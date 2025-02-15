import React from 'react'
import Navbar from './COMPONENTS/HEADER/Navbar'
import ImageHero from './COMPONENTS/IMAGE-PAGE/ImageHero'
import LatestProductsBG from "./COMPONENTS/LATEST-PRODUCTS/LatestProductsBG"
import Footer from "./COMPONENTS/FOOTER/Footer"

export default function App() {
  return (
    <div className='min-h-[100vh]'>
        <Navbar/>
        <ImageHero/>
        <LatestProductsBG/>
        <Footer/>
    </div>
  )
}
