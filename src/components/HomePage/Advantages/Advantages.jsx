import React from "react";
import { motion } from "framer-motion";
import adv1 from "../../../assets/adv1.png"
import adv2 from "../../../assets/adv2.png"
import adv3 from "../../../assets/adv3.png"
import adv4 from "../../../assets/adv4.png"
import { useTranslation } from 'react-i18next';



const Advantages = () => {

  const {t} = useTranslation();

const WhyChooseData = [
  {
    id: 1,
    title: t("adv1"),
    icon: adv1,
    delay: 0.3,
  },
  {
    id: 2,
    title: t("adv2"),
    link: "/",
    icon: adv2,
    delay: 0.6,
  },
  {
    id: 3,
    title: t("adv3"),
    link: "/",
    icon: adv3,
    delay: 0.9,
  },
  {
    id: 4,
    title: t("adv4"),
    link: "/",
    icon: adv4,
    delay: 0.9,
  },
];




  return (
    <div className="bg-black">
      <div className="container py-24">
        {/* header section */}
        <div className="space-y-4 p-6 text-center max-w-[500px] mx-auto mb-5">
          <h1 data-aos="zoom-in" className="uppercase text-sky-700">
          {t("advf")}
          </h1>
          <p data-aos="fade-up" data-aos-delay="500" className="font-semibold text-3xl md:text-4xl lg:text-4xl text-white">
          {t("advs")}
          </p>
        </div>
        {/* cards section */}
        <div  data-aos="fade-up" data-aos-delay="700" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WhyChooseData.map((item) => {
            return (
              <motion.div
                initial="hidden"
                whileInView={"visible"}
                className="space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)] bg-sky-800/50"
              >
                {/* icon section */}
                  <div className="flex justify-center items-center">
                    <img src={item.icon} alt="" className="w-[100px] h-[100px]"/>
                  </div>
                <p data-aos="zoom-in" className="font-semibold text-white text-center uppercase">{item.title}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Advantages;