"use client";

import { useTranslations } from "next-intl";
// import { IoIosSearch } from "react-icons/io";
import IslandCard from "./IslandCard";
// import { useState } from "react";
import SearchForm from "@/components/SearchForm";

const SectionOne = () => {
  const t = useTranslations("SectionOne");

  return (
    <div className="flex flex-col ">
      <h1 className=" text-[20px] md:text-2xl lg:text-5xl">{t("find")}</h1>
      <div className="flex flex-col lg:flex-row h-[100%] w-[100%] mt-4 gap-5 ">
        <SearchForm layout="row" autoSearch={false} />
      </div>

      {/* cards */}
      <div>
        <IslandCard />
      </div>
    </div>
  );
};

export default SectionOne;
