import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useTranslation } from 'react-i18next';


const FAQ = () => {
  const {t} = useTranslation();


const faqData = [
  {
    question: t("fqs1"),
    answer:
    t("fqs2"),
  },
  {
    question: t("fqs3"),
    answer:
    t("fqs4"),
  },
  {
    question: t("fqs5"),
    answer:
    t("fqs6"),
  },
  {
    question: t("fqs7"),
    answer: t("fqs8"),
  },
];




  const [active, setActive] = React.useState(null);
  const handleClick = (index) => {
    setActive(index === active ? null : index);
  };
  return (
    <div  className="bg-[url('./assets/back-cards.jpg')] w-full pb-16">
    <div data-aos="fade-up" data-aos-delay="200" className="max-w-[1200px] mx-auto px-8 ">
      <h1 className="text-3xl sm:text-5xl font-bold text-center text-white py-10">
        {t("fqs")}
      </h1>

      {faqData.map((item, index) => (
        <div key={index} className="py-4 mt-10 border-2 border-sky-800 rounded-xl bg-sky-800/50 gap-3">
          <div
            className="flex justify-between items-center cursor-pointer py-4"
            onClick={() => handleClick(index)}
          >
            <h3 className=" text-lg sm:text-xl font-semibold text-white px-4">
              {item.question}
            </h3>
            <span className='p-2'>{active === index ? <IoIosArrowUp size={30} className='fill-white'/> : <IoIosArrowDown size={30} className='fill-white'/>}</span>
          </div>

          {active === index && <p className="text-white text-lg sm:text-xl p-4">{item.answer}</p>}
        </div>
      ))}
    </div>
    </div>
  );
};

export default FAQ;
