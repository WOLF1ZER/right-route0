import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaPhone,
    FaTelegram,
  } from "react-icons/fa"
  import { FaMapLocation } from "react-icons/fa6"
  import Logo from "../../assets/logo.png"
  import { motion } from "framer-motion"
  import { IoMailSharp } from "react-icons/io5";
  import { useTranslation } from 'react-i18next';




  const Footer = () => {

    const {t} = useTranslation();

    return (
      <footer id="footer" className="bg-gradient-to-b from-black to-sky-800 pt-12 pb-8 text-white justify-center items-center py-20">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* company details section */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.6,
              }}
              className="space-y-4"
            >
              
              <div className='flex flex-col items-center'>
              <img src={Logo} alt="" className="max-w-[100px]" />
              <h3 className=" text-center py-2">
              Right Route Crewing Company
                </h3>

           
            
            <p className='text-center text-md'>{t("footp1")}</p>
              </div>
            </motion.div>
            {/* Footer Links section */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.6,
              }}
              className="space-y-6"
            >
              <h1 className="text-3xl font-bold text-center">{t("footfl")}</h1>
              <div className="grid grid-cols-1 gap-3">
                <div>
                  <ul className="space-y-2 text-center text-lg">
                    <li className='hover:text-primary'><a href="#">{t("footm1")}</a></li>
                    <li className='hover:text-primary'><a href="/#about-us">{t("footm2")}</a></li>
                    <li className='hover:text-primary'><a href="/#docs">{t("footm3")}</a></li>
                    <li className='hover:text-primary'><a href="https://t.me/rightroute_bot">{t("footm4")}</a></li>
                    <li className='hover:text-primary'><a href="/#contacts">{t("footm5")}</a></li>
                  </ul>
                </div>
              </div>
            </motion.div>
            {/* Social Links section */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.6,
              }}
              className="space-y-6"
            >
              <h1 className="text-3xl font-bold text-center">{t("footct")}</h1>
              <div>
                <p className="flex items-center gap-2 justify-center hover:text-primary">
                  <FaPhone />
                  <a href="tel:+38 (095) 360-2127">+38 (095) 360-2127</a>
                </p>
                <p className="flex items-center gap-2 mt-2 justify-center hover:text-primary">
                 <IoMailSharp />
                  <a href="mailto:rightroutecrewing@gmail.com">rightroutecrewing@gmail.com</a>
                </p>
                <p className="flex items-center gap-2 mt-2 justify-center">
                  {" "}
                  <FaMapLocation /> {t("footmap")}
                </p>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <a href="https://www.facebook.com/profile.php?id=61565942559420"><FaFacebook className="text-3xl hover:scale-105 duration-300" /></a>
                <a href="https://www.instagram.com/rightroute_crewing/?igsh=MWcxeXpvdTBlYWJnaQ%3D%3D&utm_source=qr"><FaInstagram className="text-3xl hover:scale-105 duration-300" /></a>
                <a href="https://t.me/rightroutecrewingagency"><FaTelegram className="text-3xl hover:scale-105 duration-300" /></a>
              </div>
            </motion.div>
          </div>
          {/* copyright section */}
          <p className="text-center mt-8 border-t-2 border-white/40 pt-8">
            Copyright &copy; 2024. All Rights Reserved
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  