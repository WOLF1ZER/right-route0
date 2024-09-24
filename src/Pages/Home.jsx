import React, {useState} from 'react'
import Navbar from "../components/Navbar/navbar";
import Hero from "../components/HomePage/Hero/Hero";
import Services from "../components/HomePage/Services/Services";
import Banner from "../components/HomePage/Banner/Banner"
import Advantages from "../components/HomePage/Advantages/Advantages"
import FormBackground from "../components/HomePage/Form/FormBackground"
import Indicators from "../components/HomePage/Indicators/Indicators"
import AOS from "aos"
import "aos/dist/aos.css"
import Testimonial from '../components/HomePage/Testimonial/Testimonial';
import Footer from '../components/Footer/Footer';
import { useEffect } from 'react';
import Popup from '../components/IndependentItems/Popup';
import Contactcircle from '../components/IndependentItems/Contactcircle';
import GoUP from '../components/IndependentItems/GoUP';






const Home = () => {


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
        <Hero handleOrderPopup={handleOrderPopup} />
        <Services handleOrderPopup={handleOrderPopup}/>
        <Banner />
        <Advantages />
        <FormBackground />
        <Indicators />
        <Testimonial />
        <Contactcircle />
        <GoUP />
        <Footer />
        <Popup handleOrderPopup={handleOrderPopup} orderPopup={orderPopup}/>
        
        
       
    </div>
  )
}

export default Home