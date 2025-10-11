import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { IoIosSearch } from "react-icons/io";

const SectionOne = () => {
  const t = useTranslations("SectionOne");

  return (
    <div className="flex flex-col">
      <h1 className=" text-[20px] md:text-5xl">{t("find")}</h1>
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
      {/* cards */}
      <div className=" h-full w-full flex flex-row mt-10 overflow-x-scroll scroll scroll-smooth ">
        {/* <div> */}
        <div className=" w-[80%] flex flex-row gap-3 shrink-0 ">
          <div className="h-[380px] w-[50%] rounded-[30px] overflow-hidden">
            <Image
              src="/islands/fiji-island.jpg"
              alt="background-img"
              width={400}
              height={50}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative h-[380px] w-[50%] flex flex-col justify-between">
            <div className="pt-5">
              <h2 className="text-2xl">Lagon View Villa</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate est quis eum, officia asperiores itaque reiciendis?
                Asperiores repellendus aperiam dignissimos.
              </p>
            </div>

            <div className="h-[150px] w-[200px] rounded-2xl overflow-hidden">
              <Image
                src="/islands/fiji-island.jpg"
                alt="background-img"
                width={400}
                height={50}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-3">Pagination</div>
          </div>
        </div>

        <div className=" w-[80%] flex flex-row gap-3 shrink-0 ">
          <div className="h-[380px] w-[50%] rounded-[30px] overflow-hidden">
            <Image
              src="/islands/fiji-island.jpg"
              alt="background-img"
              width={400}
              height={50}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative h-[380px] w-[50%] flex flex-col justify-between">
            <div className="pt-5">
              <h2 className="text-2xl">Lagon View Villa</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate est quis eum, officia asperiores itaque reiciendis?
                Asperiores repellendus aperiam dignissimos.
              </p>
            </div>

            <div className="h-[150px] w-[200px] rounded-2xl overflow-hidden">
              <Image
                src="/islands/fiji-island.jpg"
                alt="background-img"
                width={400}
                height={50}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-3">Pagination</div>
          </div>
        </div>

        <div className=" w-[80%] flex flex-row gap-3 shrink-0 ">
          <div className="h-[380px] w-[50%] rounded-[30px] overflow-hidden">
            <Image
              src="/islands/fiji-island.jpg"
              alt="background-img"
              width={400}
              height={50}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative h-[380px] w-[50%] flex flex-col justify-between">
            <div className="pt-5">
              <h2 className="text-2xl">Lagon View Villa</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate est quis eum, officia asperiores itaque reiciendis?
                Asperiores repellendus aperiam dignissimos.
              </p>
            </div>

            <div className="h-[150px] w-[200px] rounded-2xl overflow-hidden">
              <Image
                src="/islands/fiji-island.jpg"
                alt="background-img"
                width={400}
                height={50}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-3">Pagination</div>
          </div>
        </div>

        {/* </div> */}
      </div>
    </div>
  );
};

export default SectionOne;
