import { useState } from 'react';
import wave from "../../../assets/wave.gif";
import { useTranslation } from 'react-i18next';





const CardsWithDocs = () => {

    const {t} = useTranslation();


const CardsData = [
    {
        title: t("nc1"),
        aosDelay: "300",
        desc: [ t("ncl1f"), t("ncl2f"), t("ncl3f"), t("ncl4f"), t("ncl5f"), t("ncl6f"), t("ncl7f"),t("ncl8f"),]
    },
    {
        title: t("nc2"),
        aosDelay: "300",
        desc: [ t("ncl1s"), t("ncl2s"), t("ncl3s"), t("ncl4s")]
    },
    {
        title: t("nc3"),
        aosDelay: "300",
        desc: [t("ncl1t"), t("ncl2t"), t("ncl3t"), t("ncl4t"), t("ncl5t"), t("ncl6t"), t("ncl7t"), t("ncl8t")]
    },
    {
        title: t("nc4"),
        aosDelay: "300",
        desc: [t("ncl1ff"), t("ncl2ff"), t("ncl3ff"), t("ncl4ff"), t("ncl5ff"), t("ncl6ff"), t("ncl7ff"),]
    },
    {
        title: t("nc5"),
        aosDelay: "300",
        desc: [t("ncl1fff"), t("ncl2fff"), t("ncl3fff"), t("ncl4fff"),t("ncl5fff"),t("ncl6fff"),t("ncl7fff"),]
    },
    {
        title: t("nc6"),
        aosDelay: "300",
        desc: [t("ncl1ss"), t("ncl2ss"),t("ncl3ss"),t("ncl4ss"),t("ncl5ss"),t("ncl6ss"),]
    },
];





    const [flippedStates, setFlippedStates] = useState(Array(CardsData.length).fill(false));

    const handleFlip = (index) => {
        const updatedFlippedStates = flippedStates.map((isFlipped, i) =>
            i === index ? !isFlipped : isFlipped
        );
        setFlippedStates(updatedFlippedStates);
    };

    return (
        <div className="bg-black text-white py-12">
            <div className="container">
                <div className="min-h-[400px]">
                    <div className="flex justify-center items-center">
                        <h1 data-aos="fade-up" data-oas-delay="300" className="text-3xl sm:text-3xl text-center font-bold p-10 md:p-16 lg:p-16 xl:p-16 lg:text-5xl md:text-5xl xl:text-5xl">
                            {t("nc")}
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 relative z-10 md:grid-cols-2">
                        {CardsData.map((card, index) => (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={card.aosDelay}
                                className="relative w-[100%] h-[550px] lg:w-[300px] xl:h-[700px] xl:w-[400px] mx-auto flip-card cursor-pointer"
                                onClick={() => handleFlip(index)}
                            >
                                <div className={`flip-card-inner ${flippedStates[index] ? 'flipped' : ''}`}>
                                    {/* Front side */}
                                    <div className="flip-card-front bg-sky-800/50 text-white flex justify-center items-center rounded-lg border-2 border-sky-800">
                                        <h1 className="text-3xl font-bold text-center p-2">{card.title}</h1>
                                    </div>

                                    {/* Back side */}
                                    <div className="flip-card-back bg-black text-white flex flex-col justify-start items-start pl-4 rounded-xl border-2 border-sky-800">
                                        <div>
                                            <h1 className='font-bold text-2xl px-12 py-4 text-center sm:px-3 xl:px-5 xl:py-7 xl:text-3xl text-sky-700'>{t("rd")}</h1>
                                        </div>
                                        
                                        {card.desc.map((line, idx) => (
                                            <p key={idx} className="text-xl py-2 text-left font-semibold xl:py-4 xl:px-2 xl:text-xl">{line}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <img src={wave} alt="" className="h-[200px] w-full object-cover mix-blend-screen -translate-y-24 relative z-[0]" />
                </div>
            </div>
        </div>
    );
};

export default CardsWithDocs;
