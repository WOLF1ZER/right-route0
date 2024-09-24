import React, { useEffect, useState } from 'react';
import tglogo from "../../assets/tglogo.png";

const Contactcircle = () => {
  const [isVisible, setIsVisible] = useState(true); // State to manage visibility

  useEffect(() => {
    const footer = document.getElementById('footer'); // Assuming the footer has an ID
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting); // Hide if footer is visible
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (footer) {
      observer.observe(footer);
    }

    return () => {
      if (footer) observer.unobserve(footer);
    };
  }, []);

  return (
    isVisible && ( // Conditionally render based on visibility
      <div data-aos="fade-left" className='fixed bottom-3 right-3 z-[45]'>
        <a href="https://t.me/rightroutecrewing"><img src={tglogo} alt="Logo" className='w-12 sm:w-16 animate-bounce'/></a>
      </div>
    )
  );
};

export default Contactcircle;
