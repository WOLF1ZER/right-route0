import React from "react";
import wave from "../../../assets/wave.gif";
import doc2 from "../../../assets/doc2.png";
import doc1 from "../../../assets/doc1.png";
import doc3 from "../../../assets/doc3.png";
import doc4 from "../../../assets/doc4.png";
import doc5 from "../../../assets/doc5.png";
import doc6 from "../../../assets/doc6.png";
import doc7 from "../../../assets/doc7.png";
import doc8 from "../../../assets/doc8.png";
import { useTranslation } from 'react-i18next';




const Services = ({handleOrderPopup}) => {

    const {t} = useTranslation();


const ServiceData = [
    {
        title: t("doc1"),
        imageSrc: doc2,
        buttonText: t("docb"),
        aosDelay: "300",
    },
    {
        title: t("doc2"),
        imageSrc: doc7,
        buttonText: t("docb"),
        aosDelay: "300",
    },
    {
        title: t("doc3"),
        imageSrc: doc8,
        buttonText: t("docb"),
        aosDelay: "300",
    },
    {
        title: t("doc4"),
        imageSrc: doc3,
        buttonText: t("docb"),
        aosDelay: "300",
    },
    {
        title: t("doc5"),
        imageSrc: doc4,
        buttonText: t("docb"),
        aosDelay: "300",
    },
    {
        title: t("doc6"),
        imageSrc: doc5,
        buttonText: t("docb"),
        aosDelay: "300",
    },
    {
        title: t("doc7"),
        imageSrc: doc1,
        buttonText: t("docb"),
        aosDelay: "300",
    },
    {
        title: t("doc8"),
        imageSrc: doc6,
        buttonText: t("docb"),
        aosDelay: "300",
    },
];






    return (
        <div className="bg-black text-white">
            <div className="container">
                <div className="min-h-[400px]">
                    <div>
                    <div className="flex justify-center items-center">
                        <h1 className="text-2xl sm:text-3xl text-center font-bold p-10 md:p-16 lg:p-16 xl:p-16 lg:text-5xl md:text-5xl xl:text-5xl">{t("tod")}</h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-6 relative z-10 md:grid-cols-2">
                        {ServiceData.map((service, index) => (
                            <div
                                key={index}
                                className="min-h-[180px] flex flex-col justify-center items-center rounded-xl gap-2 bg-black/60 backdrop-blur-sm  text-white text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto border-2 border-sky-800"
                                data-aos="fade-up"
                                data-aos-delay={service.aosDelay}
                            >
                                <img 
                                    src={service.imageSrc} 
                                    className=" h-[100px] object-cover rounded-md"
                                />
                                <h1 className="text-2xl font-bold mt-4 p-6">
                                    {service.title}
                                </h1>
                                <p className="text-xl mt-2">{service.contents}</p>
                                <button onClick={handleOrderPopup} className="bg-white text-black hover:bg-primary/50 px-16 py-2 rounded-2xl duration-200">
                                    {service.buttonText}
                                </button>
                            </div>
                        ))}
                    </div>
                    <img src={wave} alt="" className="h-[200px] w-full  object-cover mix-blend-screen -translate-y-24 relative z-[0]" />
                </div>
                </div>
            </div>
        </div>
    );
};

export default Services;