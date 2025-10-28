"use client";

import { useTranslations } from "next-intl";
import { IoIosSearch } from "react-icons/io";
import IslandCard from "./IslandCard";
// import { useState } from "react";
import SearchForm from "@/components/SearchForm";

const SectionOne = () => {
  const t = useTranslations("SectionOne");

  return (
    <div className="flex flex-col">
      <h1 className=" text-[20px] md:text-2xl lg:text-5xl">{t("find")}</h1>
      <form className="flex flex-col lg:flex-row h-[100%] w-[100%] mt-4 gap-5 ">
        <div>
          <label htmlFor="date">{t("checkin")}</label> <br />
          <input
            type="date"
            className="w-[100%] md:w-[400px] lg:w-[250px] xl:w-[410px] border-b-2 border-gray-300 "
          />
        </div>
        <div>
          <label htmlFor="date">{t("Checkout")}</label>
          <br />
          <input
            type="date"
            className="w-[100%] md:w-[400px] lg:w-[250px]  xl:w-[410px] border-b-2 border-gray-300"
          />
        </div>
        <div>
          <label htmlFor="">{t("guest")}</label>
          <br />
          <select
            id="guest"
            className="w-[100%] md:w-[400px] lg:w-[250px] xl:w-[410px] border-b-2 border-gray-300"
          >
            <option value="one">1-person</option>
            <option value="Two">2-people</option>
            <option value="Three">3-people</option>
            <option value="Four">4-people</option>
          </select>
        </div>
        <button className="h-[50px] w-[100%] md:w-[400px] lg:w-[190px]  xl:w-[200px] flex  justify-center items-center gap-5 rounded-full text-white bg-foreground">
          {t("search")}
          <span>
            <IoIosSearch />
          </span>
        </button>
      </form>
      <div className="h-full w-full ">
        <SearchForm />
      </div>

      {/* cards */}
      <div>
        <IslandCard />
      </div>
    </div>
  );
};

export default SectionOne;
