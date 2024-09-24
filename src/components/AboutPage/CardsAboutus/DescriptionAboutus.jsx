import React from 'react';
import {motion} from "framer-motion";
import { SlideUp } from '../../../utility/animation';



const DescriptionAboutus = ({ image, title, subtitle, link, tag, reverse }) => {
        return (
        <div className="bg-[url('./assets/back-cards.jpg')]">
          <div className="bg-transparent pt-20 py-20">
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0">
                {/* banner Image section */}
                <div
                  className={`flex justify-start items-center ${
                    reverse && "md:order-last md:justify-end"
                  }`}
                >
                  <motion.img
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                    src={image}
                    alt=""
                    className="w-[500px] h-[500px] object-cover p-4 border-2 border-sky-800 rounded-lg"
                  />
                </div>
                {/* Banner text section */}
                <div className="flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px]">
                  <motion.p
                    variants={SlideUp(0.5)}
                    initial="hidden"
                    whileInView={"visible"}
                    className="text-sm text-sky-700 capitalize"
                  >
                    {tag}
                  </motion.p>
                  <motion.p
                    variants={SlideUp(0.7)}
                    initial="hidden"
                    whileInView={"visible"}
                    className="text-2xl lg:text-3xl font-semibold capitalize text-white"
                  >
                    {title}
                  </motion.p>
                  <motion.p
                    variants={SlideUp(0.9)}
                    initial="hidden"
                    whileInView={"visible"}
                    className="text-xl text-white p-3"
                  ><div className='border-b-2 border-sky-800  border-r-2 rounded-lg p-4 '>
                   <p className='lg:text-2xl text-lg'>{subtitle}</p> 
                    </div>
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </div>
        );
      };

export default DescriptionAboutus;