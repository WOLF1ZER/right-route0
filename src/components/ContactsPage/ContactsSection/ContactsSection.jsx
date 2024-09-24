import React from 'react'
import ContactsForm from "../ContactsForm/ContactsFrom"
import { IoMailSharp } from "react-icons/io5";
import {FaPhone} from "react-icons/fa"
import tg from "../../../assets/tg.png"
import { useTranslation } from 'react-i18next';

const ContactsSection = () => {

  const {t} = useTranslation();
  return (
    <section className="bg-[url('./assets/back-cards.jpg')] text-white py-16 pb-12">
  <div className="xl:container">
    <h1 data-aos="fade-up" data-oas-delay="300" className='text-2xl sm:text-5xl font-bold p-3 sm:p-5 text-center'>{t("consec1")}</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
      <div>
        
          
          <h1 data-aos="fade-up" data-oas-delay="500" className='font-semibold text-xl sm:text-3xl px-1 py-3 text-center '>
          {t("consec2")}
          </h1>
          <div className='flex text-center'>
            <p data-aos="fade-up" data-oas-delay="700"className='p-2 text-sm sm:text-md text-gray-400'>
            <span className='text-sky-700 uppercase'>Right Route</span> {t("consec3")}
            </p>
          </div>
          <div data-aos="fade-up" data-oas-delay="900"className='mt-2'>
          <div className='flex justify-center items-center p-3'>
            <a href="https://t.me/rightroutecrewing"><img src={tg} alt="" className='w-[200px]' /></a>
          </div>
          <div>
            <div data-aos="fade-up" data-oas-delay="1200" className='flex justify-center text-center'>
            <h1 className='text-2xl sm:text-3xl font-bold p-3 sm:p-5 flex'>
            <FaPhone /> <a href="tel:+38 (095) 360-2127"><span className='px-2 hover:text-primary'>+38 (095) 360-2127</span></a>
            </h1>
            </div>
            <div data-aos="fade-up" data-oas-delay="1400" className='flex justify-center text-center'>
            <p className='flex text-sm font-semibold p-2 sm:p-3 sm:text-xl '>
            <IoMailSharp className=' text-2xl sm:text-3xl' /> <a href="mailto:rightroutecrewing@gmail.com"><span className='px-2 hover:text-primary'>rightroutecrewing@gmail.com</span></a>
            </p>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in">
        <ContactsForm />
      </div>
    </div>
  </div>
</section>
  )
}

export default ContactsSection