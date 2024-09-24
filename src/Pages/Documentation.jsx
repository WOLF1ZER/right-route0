import React from 'react'
import Navbar from '../components/Navbar/navbar'
import Footer from '../components/Footer/Footer'
import AOS from "aos"
import "aos/dist/aos.css"
import HeroDocs from '../components/DocsPage/HeroDocs/HeroDocs'
import DocsList from '../components/DocsPage/DocsList/DocsList'
import { useEffect } from 'react';
import Testimonials from "../components/HomePage/Testimonial/Testimonial"
import Indicators from "../components/HomePage/Indicators/Indicators"
import Popup from '../components/IndependentItems/Popup'
import Contactcircle from '../components/IndependentItems/Contactcircle'
import GoUP from '../components/IndependentItems/GoUP'

const Documentation = () => {

  const [orderPopup, setOrderPopup] = React.useState(false);

const handleOrderPopup = () => {
  setOrderPopup(!orderPopup);
}


  React.useEffect(() => {
    AOS.init({
      duration:1200,
      easing: "ease-in-out",
    });
  });
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the page loads
  }, []);


  return (
    <div className='bg-black w-full'>
      <Navbar />
      <HeroDocs />
      <DocsList handleOrderPopup={handleOrderPopup} />
      <Indicators />
      <Testimonials />
      <Contactcircle />
      <GoUP />
      <Footer />
      <Popup handleOrderPopup={handleOrderPopup} orderPopup={orderPopup}/>
    </div>
  )
}

export default Documentation