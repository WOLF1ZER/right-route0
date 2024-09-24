import React from 'react'
import backabout from "../../../assets/backabout2.jpg"
import { useTranslation } from 'react-i18next';

const HeroAboutus = () => {

  const {t} = useTranslation();

    return (
      <div className="relative">
      <div className="h-[1000px] md:h-[1200px] lg:h-[1400px] xl:h-[1000px] 2xl:h-[1200px] z-[5] relative">
           <img
           src={backabout} 
           className="absolute right-0 top-0 h-full w-full object-cover z-[-1]"
           >
           </img>
           <div className="h-full flex justify-center items-center p-4">
            <div className="container grid grid-cols-1 sm:grid-cols-1 gap-4">
              <div className="text-white space-y-4 lg:pr-36">
                <h1 data-aos="fade-up" className="text-3xl font-bold uppercase md:text-5xl lg:text-5xl xl:text-5xl">
                {t("abhero1")}
                </h1>
                <p data-aos="fade-up" data-aos-delay="300" className='text-xl md:text-3xl lg:text-3xl xl:text-3xl'>
                {t("abhero2")}
                </p>
              </div>
              <div></div>
            </div>
          </div>
       
       </div>
     </div>
      )

    }

      export default HeroAboutus;