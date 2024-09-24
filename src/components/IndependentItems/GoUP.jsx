import React, { useState, useEffect } from 'react';
import { IoIosArrowDropup } from "react-icons/io";

const GoUP = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Select the footer element
    const footer = document.querySelector('footer');
    
    // Create an IntersectionObserver to detect when footer is in view
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when at least 10% of the footer is visible
    );

    if (footer) {
      observer.observe(footer);
    }

    // Cleanup the observer when the component unmounts
    return () => {
      if (footer) {
        observer.unobserve(footer);
      }
    };
  }, []);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    isVisible && (
      <div data-aos="fade-left" className='fixed bottom-5 right-3 z-[45] cursor-pointer' onClick={scrollToTop}>
        <IoIosArrowDropup size={50} data-aos="fade-left" className='fill-white' />
      </div>
    )
  );
};

export default GoUP;
