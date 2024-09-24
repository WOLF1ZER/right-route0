import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';



{/*when selecting pages it moves to top */}
const ScrollToTheTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0); // Scroll to the top of the page
    }, [pathname]);
  
    return null;
  };
  export default ScrollToTheTop;