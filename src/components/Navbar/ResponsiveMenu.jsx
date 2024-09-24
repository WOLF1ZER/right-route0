import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const LangMobileLinks = [
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
];

const ResponsiveMenu = ({ showMenu, setShowMenu}) => {
    const closeMenu = () => {
        setShowMenu(false);
    };


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

const changeLanguage = (langCode) => {
    i18next.changeLanguage(langCode);
  };




    return (
        <div
            className={`${
                showMenu ? "left-0" : "-left-full"
            } fixed top-0 z-50 backdrop-opacity-95 bg-black h-screen w-[100%] md:hidden shadow-md flex flex-col justify-between px-8 pb-6 pt-12 transition-all duration-300`}
        >
            <div className="card">
                {/* Links */}
                <nav className="mt-10">
                    <ul className="space-y-4 text-xl text-white">
                        {NavLinks.map((data) => (
                            <li
                                className="text-center hover:rounded-r-full w-full hover:bg-sky-800/50 p-1 bg-transparent font-semibold"
                                key={data.id}
                                onClick={closeMenu}
                            >
                                <a href={data.link}>{data.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                {/* Footer */}
                <div className="flex flex-col items-center mt-10">
                    <ul className="flex justify-center items-center">
                        {LangMobileLinks.map((langs, index) => (
                            <li className="px-3" key={langs.id} onClick={closeMenu}>
                                <a
                                    className="text-gray-400 hover:bg-sky-800/50 hover:rounded-xl p-3 font-semibold text-lg border-2 border-sky-800 rounded-lg"
                                    onClick={() => changeLanguage(langs.code)} // Trigger language change
                                   >{langs.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ResponsiveMenu;
