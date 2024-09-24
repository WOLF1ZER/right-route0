import React from "react";
import Slider from "react-slick";
import { FaUserCircle } from "react-icons/fa";
import { useTranslation } from 'react-i18next';


const testimonialData = [
  {
    id: 1,
    name: "Павло",
    text: "Замовляю вже не вперше і завжди задоволен результатом.",
    img: <FaUserCircle size={60} className='fill-white' />,
  },
  {
    id: 2,
    name: "Сергей",
    text: "Выражаю благодарность за оперативную реакцию и выполнение заказа.",
    img: <FaUserCircle size={60} className='fill-white' />,
  },
  {
    id: 3,
    name: "Dima S.",
    text: "Спасибо ребятами за работу, выполнили все в сроки! Всем советую!",
    img: <FaUserCircle size={60} className='fill-white' />,
  },
  {
    id: 4,
    name: "Олег",
    text: "Швидко отримав усі документи. Дякую за чудову роботу!",
    img: <FaUserCircle size={60} className='fill-white' />,
  },
  {
    id: 5,
    name: "Petr Karpov",
    text: "Документы получил быстро и четко.  Особо хочу отметить отличную коммуникацию.",
    img: <FaUserCircle size={60} className='fill-white' />,
  },

];




const Testimonial = () => {

  const {t} = useTranslation();
  






  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

};

  return (
    <>
      <div className="py-20 bg-[url('./assets/back-cards.jpg')]" data-aos-delay="300" data-aos="xoom-in">
        <div className="container">
          <div className="text-center mb-20 max-w-[600px] mx-auto">
            <p className="text-md uppercase bg-clip-text  text-sky-700" data-aos="fade-down" data-aos-delay="300">
              {t("testi1")}
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-5xl xl:text-5xl font-bold text-white py-2" data-aos="fade-down" data-aos-delay="600">{t("testi2")}</h1>
            <p data-aos="zoom-in" data-aos-delay="300" className="text-md text-gray-300 py-2">
            {t("testip1")} <span className="text-sky-700" >RIGHT ROUTE</span>, {t("testip2")}
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[1000px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map((data) => {
                return (
                  <div className="my-2">
                    <div
                      key={data.id}
                      className=" flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-sky-800/50 border-2 border-sky-800 relative"
                    >
                      <div className="flex py-2">
                        <div>{data.img}</div>
                        <h1 className="text-xl font-bold text-white px-3 py-4">
                            {data.name}
                          </h1>
                      </div>
                      
                      
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="text-gray-400 text-md">{data.text}</p>
                          
                        </div>
                      </div>

                      <p className="text-xl font-serif absolute top-0 right-0 p-3">
                      ⭐⭐⭐⭐⭐
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
