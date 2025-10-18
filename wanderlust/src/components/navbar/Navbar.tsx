"use client";

import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
// import { IoIosMenu } from "react-icons/io";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";

const Navbar = () => {
  const t = useTranslations("navbar");
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("sections");

      if (section) {
        const sectionTop = section.offsetTop;
        const scrollY = window.scrollY;

        if (scrollY >= sectionTop - 250) {
          setNavBg(true);
        } else {
          setNavBg(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed z-50 h-[50px] w-[98%] flex flex-row justify-between items-center px-5 xl:px-10 transition-all duration-500 rounded-3xl ${
        navBg
          ? "bg-green-50 top-0 text-foreground shadow-lg"
          : "bg-transparent top-2 text-white"
      }`}
    >
      <div className=" text-center text-2xl lg:text-4xl font-bold ">
        Wanderlust
      </div>
      <ul className="hidden  lg:flex gap-2 list-none  w-auto">
        <li
          className={`flex items-center justify-center border-0 md:border-2  rounded-2xl h-[30px] w-[150px] px-0 md:px-2 ${
            navBg ? "md:border-foreground" : "md:border-white"
          }`}
        >
          {t("explore")}
        </li>
        <li
          className={`border-0 md:border-2 flex items-center  justify-center  rounded-2xl  h-[30px] w-[150px] px-0 md:px-2 ${
            navBg ? "md:border-foreground" : "md:border-white"
          }`}
        >
          {t("about")}
        </li>
        <li
          className={`flex items-center justify-between gap-3 border-0 md:border-2    rounded-2xl px-0 md:px-2 h-[30px] w-full ${
            navBg ? "md:border-foreground" : "md:border-white"
          }`}
        >
          {t("find")}

          <span>
            <IoIosSearch />
          </span>
        </li>
      </ul>
      <div className="flex gap-2">
        <LocaleSwitcher navBg={navBg} />
        {/* <span className="text-4xl">
          <IoIosMenu />
        </span> */}
      </div>
    </div>
  );
};

export default Navbar;
