import React from 'react'
import Form from "../../HomePage/Form/Form"
import { useTranslation } from 'react-i18next';

const FormBackground = () => {
  
  const {t} = useTranslation();
  
  return (
    <>
<section className="bg-black text-white pb-12">
  <div className="xl:container">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center lg:grid-cols-2 md:grid-clos-2">
      <div data-aos="zoom-in">
        <Form  />
      </div>
      <div className="space-y-3 xl:pr-36 p-4 md:p-10 lg:p-10 xl:p-10 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800">
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-sky-700 uppercase"
        >
          {t("fbg1")}
        </p>
        <a
          data-aos="fade-up"
          data-aos-delay="500"
          href="tel:+38 (095) 360-2127"
          className="uppercase text-3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl sm:text-xl cursor-pointer"
        ><h1 className='py-5'>
          +38 (095) 360-2127</h1>
        </a>
        <p data-aos="zoom-in" data-aos-delay="700" className='text-lg'>
        {t("fbg2")}
        </p>
      </div>
    </div>
  </div>
</section>
</>
  )
}

export default FormBackground