import React from 'react'
import teamlogo from "../../../assets/teamlogo.png"
import { useTranslation } from 'react-i18next'


const Banner = () => {

  const {t} = useTranslation();

  return (
    <>
<section className="bg-[url('./assets/back-cards3.jpg')] text-white pb-12">
  <div className="container ">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
      <div data-aos="zoom-in">
        <img
          src={teamlogo}
          alt=""
          className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover rounded-lg"
        />
      </div>
      <div className="space-y-3 xl:pr-36 p-4 md:p-10 lg:p-10 xl:p-10 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800 ">
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-sky-700 uppercase"
        >
         {t("b1")}
        </p>
        <h1
          data-aos="fade-up"
          data-aos-delay="500"
          className="uppercase text-3xl md:text-5xl lg:text-5xl xl:text-5xl"
        >
          RIGHT ROUTE
        </h1>
        <p data-aos="fade-up" data-aos-delay="700" className='text-lg'>
        {t("b2")}
        </p>
      </div>
    </div>
  </div>
</section>
</>
  )
}

export default Banner;
