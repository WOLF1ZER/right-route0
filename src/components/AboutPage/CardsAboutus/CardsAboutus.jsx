import React from 'react';
import tick from "../../../assets/tick.png";
import { useTranslation } from 'react-i18next';





const CardsAboutus = () => {

    const {t} = useTranslation();

const CardsData = [
    {
        title: t("acards1"),
        imageSrc: tick,
        aosDelay: "0",
    },
    {
        title: t("acards2"),
        imageSrc: tick,
        aosDelay: "0",
    },
    {
        title: t("acards3"),
        imageSrc: tick,
        aosDelay: "0",
    },
];

    return (
        <div className="py-20 bg-black flex items-start justify-center m-auto"> {/* Adjusted to align items to start */}
            <div className="flex flex-col items-center">
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6'> {/* Reduced gap */}
                    {
                        CardsData.map((cards, index) => (
                            <div
                                key={index}
                                className="flex flex-col justify-between items-center text-black rounded-xl backdrop-blur-sm bg-white text-center text-lg p-4  shadow-2xl shadow-sky-800"
                                data-aos="fade-up"
                                data-aos-delay={cards.aosDelay}
                                style={{ height: '250px', width: '300px' }} // Ensure uniform height and width
                            >
                                <div className='flex justify-center items-center'>
                                    <img 
                                        src={cards.imageSrc} 
                                        className="h-[80px] object-cover rounded-md mb-4"
                                        alt="Icon"
                                    />
                                </div>
                                <div className='flex flex-col justify-center flex-grow'>
                                    <h1 className="uppercase text-xl md:text-2xl lg:text-2xl xl:text-2xl font-bold mb-4">
                                        {cards.title}
                                    </h1>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='pt-10'> {/* Reduced padding-top */}
                    <h1 data-aos="zoom-in" className='text-3xl md:text-5xl lg:text-5xl xl:text-5xl font-semibold text-center sm:text-4xl text-white'>
                        {t("acardst")} <span className='text-sky-700 font-mono'>RIGHT ROUTE CREWING AGENCY</span>
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default CardsAboutus;
