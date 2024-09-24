import React from 'react';
import imageback from '../../../assets/indicators.jpg';
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';




const Indicators = () => {

    const {t} = useTranslation();


const IndicatorsData = [
    {
        title: <CountUp start={0} end={2} duration={2} enableScrollSpy={true}  scrollSpyOnce={true}/>,
        description: t("indc1"),
        aosDelay: "0",
    },
    {
        title: <CountUp start={0} end={523} duration={2} enableScrollSpy={true}  scrollSpyOnce={true}/>,
        description:t("indc2"),
        aosDelay: "0",
    },
    {
        title: <CountUp start={0} end={61} duration={2} enableScrollSpy={true}  scrollSpyOnce={true}/>,
        description:t("indc3"),
        aosDelay: "0",
    },
]



  return ( 
    <div className="relative bg-black sm:min-h-[600px] sm:grid sm:place-items-center py-12">
        {/* Background Image for Half of the Page */}
        <div 
            className="absolute bottom-0 left-0 w-full h-1/2 z-0 opacity-60 blur-sm"
            style={{
                backgroundImage: `url(${imageback})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        ></div>

        {/* Content Section */}
        <div className="relative z-10 container mx-auto py-16">
            <div className='pb-16'>
                <h1 data-aos="zoom-in" className='text-3xl md:text-5xl lg:text-5xl xl:text-5xl font-bold text-center sm:text-4xl text-white p-4'>
                    {t("ind1")}
                </h1>
                <p className='text-md text-gray-300 py-2 text-center' data-aos="fade-up">
                {t("indp1")}<span className="text-sky-700">RIGHT ROUTE</span>, {t("indp2")}
                </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                {
                    IndicatorsData.map((indicator, index) => (
                        <div
                            key={index}
                            className="min-h-[180px] flex flex-col justify-center items-center text-white rounded-xl backdrop-blur-sm bg-sky-800/70 text-center text-lg py-8 px-3 w-full mx-auto border-2 border-sky-800 sm:space-y-6 p-4 sm:py-16 duration-300"
                            data-aos="fade-up"
                            data-aos-delay={indicator.aosDelay}
                        >
                            <h1 className="text-4xl md:text-6xl lg:text-6xl xl:text-6xl font-bold mt-4 p-2">
                                {indicator.title}
                            </h1>
                            <div className='text-xl'>{indicator.description}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Indicators;
