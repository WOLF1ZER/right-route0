import React from 'react'
import Navbar from '../components/Navbar/navbar'
import Footer from '../components/Footer/Footer'
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react';
import ContactsHero from '../components/ContactsPage/ContactsHero/ContactsHero'
import ContactsSection from '../components/ContactsPage/ContactsSection/ContactsSection'
import Testimonials from "../components/HomePage/Testimonial/Testimonial"
import Indicators from "../components/HomePage/Indicators/Indicators"
import Contactcircle from '../components/IndependentItems/Contactcircle'
import GoUP from '../components/IndependentItems/GoUP'

const Contacts = () => {



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
        <ContactsHero />
        <ContactsSection />
        <Indicators />
        <Testimonials />
        <Contactcircle />
        <GoUP />
        <Footer />
    </div>
  )
}

export default Contacts