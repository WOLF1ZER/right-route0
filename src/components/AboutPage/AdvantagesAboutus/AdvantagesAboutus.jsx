import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { useTranslation } from 'react-i18next';

const AdvantagesAboutus = () => {

  const {t} = useTranslation();

  // State for dropdown visibility
  const [isVisible, setIsVisible] = useState({
    advantages: false,
    disadvantages: false,
  });

  // Toggle dropdown visibility
  const toggleVisibility = (section) => {
    setIsVisible(prevState => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };

  return (
    <section className="bg-[url('./assets/back-cards3.jpg')] text-white pb-12">
      <div className="container mx-auto">
        <p data-aos="fade-up" data-oas-delay="300" className='text-md text-sky-700 text-center p-1 uppercase'>
            {t("pc1")}
         </p>
        <h1 data-aos="fade-up" data-oas-delay="500" className='font-bold text-3xl sm:text-5xl text-center p-4'>{t("pc2")}</h1>
         <p data-aos="fade-up" data-oas-delay="700" className='text-md text-gray-400 text-center p-4'>
         {t("pc3")}
         </p>
        {/* Grid layout with equal-sized columns */}
        <div className="grid grid-cols-1sm:grid-cols-2 gap-8 max-w-[500px] lg:max-w-[800px] mx-auto">
          
          {/* Advantages Section */}
          <div data-aos="zoom-in" className="bg-sky-800/50 rounded-xl p-4 flex flex-col">
            <h1 className='text-2xl font-bold text-center py-2 bg-white/70 text-green-600 rounded-xl'>
            {t("pc4")}
            </h1>
            <div className="cursor-pointer flex justify-center items-center py-3 animate-bounce" onClick={() => toggleVisibility('advantages')}>
              <IoIosArrowDown size={60} className={` text-white transition-transform duration-300 ${isVisible.advantages ? 'rotate-180' : ''}`} />
            </div>
            {isVisible.advantages && (
              <ul className="list-disc list-inside mt-4"> {/* Use list-disc for dots */}
                <li className='text-xl xl:text-2xl lg:text-xl p-4'>
                {t("pcl1")}
                </li>
                <li className='text-xl xl:text-2xl lg:text-xl p-4'>
                {t("pcl2")}
                </li>
                <li className='text-xl xl:text-2xl lg:text-xl p-4'>
                {t("pcl3")}
                </li>
                <li className='text-xl xl:text-2xl lg:text-xl p-4'>
                {t("pcl4")}
                </li>
              </ul>
            )}
          </div>

          {/* Disadvantages Section */}
          <div data-aos="zoom-in" className="bg-sky-800/50 rounded-xl p-4 flex flex-col">
            <h1 className='text-2xl font-bold text-center py-2 bg-white/70 text-red-600 rounded-xl '>
            {t("pc5")}
            </h1>
            <div className="cursor-pointer flex justify-center items-center py-2 animate-bounce" onClick={() => toggleVisibility('disadvantages')}>
              <IoIosArrowDown size={60}  className={`text-white transition-transform duration-300 ${isVisible.disadvantages ? 'rotate-180' : ''}`} />
            </div>
            {isVisible.disadvantages && (
              <ul className="list-disc list-inside mt-4"> {/* Use list-disc for dots */}
                <li className='text-xl xl:text-2xl lg:text-xl p-4'>
                {t("pcl5")}
                </li>
                <li className='text-xl xl:text-2xl lg:text-xl p-4'>
                {t("pcl6")}
                </li>
                <li className='text-xl xl:text-2xl lg:text-xl p-4'>
                {t("pcl7")}
                </li>
                <li className='text-xl xl:text-2xl lg:text-xl p-4'>
                {t("pcl8")}
                </li>
              </ul>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

export default AdvantagesAboutus;
