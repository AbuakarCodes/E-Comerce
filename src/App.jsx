import React from 'react'
import Navbar from './COMPONENTS/HEADER/Navbar'
import ImageHero from './COMPONENTS/IMAGE-PAGE/ImageHero'
import LatestProductsBG from "./COMPONENTS/LATEST-PRODUCTS/LatestProductsBG"
import Footer from "./COMPONENTS/FOOTER/Footer"
import { ToastContainer } from 'react-toastify'

export default function App() {
  return (
    <div className='min-h-[100vh]'>
        <ToastContainer />
        <Navbar/>
        <ImageHero/>
        <LatestProductsBG/>
        <Footer/>
    </div>
  )
}
