import React from 'react'
import Navbar from '../components/Navbar/navbar'
import Footer from '../components/Footer/Footer'
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react';
import HeroAboutus from '../components/AboutPage/HeroAboutus/HeroAboutus'
import CardsAboutus from '../components/AboutPage/CardsAboutus/CardsAboutus'
import DescriptionAboutus from '../components/AboutPage/CardsAboutus/DescriptionAboutus'
import Img1 from "../assets/teamlogo2.jpg"
import Img2 from "../assets/documents.jpg"
import AboutusFrom from "../components/AboutPage/AboutusFrom/AboutusForm"
import AdvantagesAboutus from '../components/AboutPage/AdvantagesAboutus/AdvantagesAboutus'
import CardsWithDocs from '../components/AboutPage/CardsWithDocs/CardsWithDocs'
import FAQ from "../components/AboutPage/FAQ/FAQ"
import { useTranslation } from 'react-i18next';
import Contactcircle from '../components/IndependentItems/Contactcircle'
import GoUP from '../components/IndependentItems/GoUP'



const Aboutus = () => {



  const {t} = useTranslation();

  const BannerData = {
  image: Img1,
  tag: t("pst1"),
  title: t("pst2"),
  subtitle:t("pst3"),
  link: "#",
};

const BannerData2 = {
  image: Img2,
  tag: t("pstt1"),
  title: t("pstt2"),
  subtitle: t("pstt3"),
  link: "#",
};

  


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
      <HeroAboutus />
      <DescriptionAboutus {...BannerData}/>
      <CardsAboutus />
      <DescriptionAboutus {...BannerData2} reverse={true}/>
      <AboutusFrom />
      <AdvantagesAboutus />
      <CardsWithDocs />
      <FAQ />
      <Contactcircle />
      <GoUP />
      <Footer />
      </div>
  )
}

export default Aboutus