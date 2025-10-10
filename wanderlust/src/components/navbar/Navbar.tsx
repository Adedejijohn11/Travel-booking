import React from "react";
import { IoIosSearch } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";

const Navbar = () => {
  const t = useTranslations("navbar");
  return (
    <div className=" fixed top-2 z-50 h-[50px] w-full flex flex-row justify-between items-center px-5 xl:px-10  ">
      <div className="text-white text-center text-2xl lg:text-4xl font-bold ">
        Wanderlust
      </div>
      <ul className="hidden  lg:flex gap-2 list-none  w-auto text-white ">
        <li className="flex items-center justify-center border-0 md:border-2  md:border-white rounded-2xl  h-[30px]  w-[150px] px-0 md:px-2">
          {t("explore")}
        </li>
        <li className="  border-0 md:border-2 flex items-center  justify-center md:border-white rounded-2xl  h-[30px] w-[150px] px-0 md:px-2">
          {t("about")}
        </li>
        <li className="flex items-center justify-between gap-3 border-0 md:border-2   md:border-white rounded-2xl px-0 md:px-2 h-[30px] w-full">
          {t("find")}

          <span>
            <IoIosSearch />
          </span>
        </li>
      </ul>
      <div className="flex gap-2">
        <LocaleSwitcher />
        <span className="text-4xl">
          <IoIosMenu />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
