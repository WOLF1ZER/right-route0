import React, { useState, useEffect, useRef} from "react";
import logo from "../../assets/logo.png";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu.jsx";
import { LuLanguages } from "react-icons/lu";
import { useTranslation } from "react-i18next";
import i18next from "i18next"



const DropdownLinks = [
    {
        id:  1,
        name: "RU",
        code: "ru",
    },
    {
        id:  2,
        name: "UA",
        code: "ua",
    },
    {
        id:  3,
        name: "EN",
        code: "en",
    },
]





const Navbar = () => {
const [showMenu, setShowMenu] = useState(false);
const [scrolling, setScrolling] = useState(false);
const [showDropdown, setShowDropdown] = useState(false);
const dropdownRef = useRef(null); // Add a ref for the dropdown

const {t} = useTranslation();



 const NavLinks = [
    {
        id:"1",
        name: t("m1"),
        link: "/#",
    },
    {
        id:"2",
        name: t("m2"),
        link: "/#about-us",
    },
    {
        id:"3",
        name: t("m3"),
        link: "/#docs",
    },
    {
        id:"4",
        name: t("m4"),
        link: "https://t.me/rightroute_bot",
    },
    {
        id:"5",
        name: t("m5"),
        link: "/#contacts",
    }
];


const closeDropdown = () => {
    setShowDropdown(false)
}
const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
};

{/*to close dropdown by the click anywhere */}
useEffect(() => {
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowDropdown(false); // Close the dropdown if clicked outside
        }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
}, [dropdownRef]);

useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}, []);


{/*Scrolling changing navbar background-color*/}
useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

const togglemenu = () => {
    setShowMenu(!showMenu);
};

const changeLanguage = (langCode) => {
    i18next.changeLanguage(langCode);
    closeDropdown(); // Close the dropdown after selecting a language
  };


 {/*"data-aos" - animation for navbar*/}
    return (
        <nav>
            <div data-aos="fade-down" className={scrolling ? 'bg-black fixed top-0 right-0 w-full z-50 py-0.5 sm:py-0.5 ' :'fixed top-0 right-0 w-full z-50 py-0.5 sm:py-0.5'}>
            <div className="container py-1 md:py-0">
                <div className="flex justify-between items-center">
                    <div className="flex resize-none">
                        <a href="#"><img src={logo} alt="" className="w-[50px] sm:w-16 z-[10000] relative"></img></a>
                    </div>
                    <div className="hidden md:block">
                        <ul className="flex items-center gap-6">
                            {
                                NavLinks.map((data) => (
                                <li key={data.id} className="py-4">
                                <a  className="inline-block py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500 lg:text-lg font-semibold text-white md:text-[13.5px]" href = {data.link}>
                                    {data.name}
                                    </a>
                            </li>
                            ))}
                           {/*Dropdown*/}
                           <li className="relative cursor-pointer group">
                            <a className="flex items-center gap-[2px]
                            font-semibold text-black  bg-white rounded px-4 py-1 xl:px-4 xl:py-1 lg:px-4 lg:py-1 md:px-2 md:py-1" onClick={toggleDropdown}>
                                <span>
                                <LuLanguages size="25" className="group-hover:rotate-0 " />
                                </span>
                                </a> 

                                {/*Dropdown Links*/}
                                {showDropdown && (
                                <div ref={dropdownRef} className="absolute z-[9999] w-auto bg-white rounded-b-xl py-1 ">
                                   <ul className="space-y-3">
                                      {
                                        DropdownLinks.map((langs,index) =>(
                                            
                                            <li>
                                              <a
                              className="text-gray-500 hover:bg-gray-200 hover:rounded-xl px-4 py-1  lg:px-4 lg:py-1 md:px-2 md:py-1"
                              onClick={() => changeLanguage(langs.code)} // Trigger language change
                            >{langs.name}</a>
                                            </li>
                                        ))
                                        
                                      }
                                   </ul>
                                </div>
                                )}
                           </li>
                        </ul>
                    </div>
                    <div className="flex items-center  gap-4 md:hidden">
                    {/*Mobil Hamburger menu*/}
                    {
                      showMenu?(
                      <HiMenuAlt1
                      onClick={togglemenu} 
                      size={50}
                     className="cursor-pointer transition-all fill-white z-[10000] relative"
                     />
                      ): (
                     <HiMenuAlt3 
                     onClick={togglemenu} 
                     size={50}
                     className="cursor-pointer transition-all fill-white"
                     />
                       )
                    } 
                    </div>
                </div>
            </div>
            <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu}/>
         </div>
        </nav>

    );
}; 

export default Navbar;