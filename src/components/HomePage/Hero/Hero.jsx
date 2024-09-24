import React from 'react';
import bgVideo from "../../../assets/oilfleet.mp4";
import { useTranslation } from 'react-i18next';

const Hero = ({ handleOrderPopup }) => {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <div className="h-[1000px] md:h-[1200px] lg:h-[1400px] xl:h-[1000px] 2xl:h-[1200px] z-[5] relative">
        <video
          autoPlay
          playsInline
          loop
          muted
          className="absolute right-0 top-0 h-full w-full object-cover z-[-1]"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="h-full flex justify-center items-center p-4">
          <div className="container grid grid-cols-1 sm:grid-cols-1 gap-4">
            <div className="text-white space-y-4 lg:pr-36">
              <h1
                data-aos="fade-up"
                className="text-3xl font-bold uppercase md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl"
              >
                {t("hero1")}
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-xl md:text-3xl lg:text-3xl xl:text-3xl"
              >
                {t("hero1p")}
              </p>
              <button
                onClick={handleOrderPopup}
                data-aos="fade-up"
                data-aos-delay="700"
                className="bg-white text-black hover:bg-primary px-10 py-4 rounded-2xl duration-200 font-semibold uppercase md:px-20 md:py-5 lg:px-20 lg:py-5 xl:px-20 xl:py-5 text-sm md:text-lg lg:text-lg xl:text-lg"
              >
                {t("hero1b")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
