import Image from "next/image";
import React from "react";

const SectionTwo = () => {
  return (
    <div className="flex flex-col px-5">
      <div className="h-[100%] lg:h-[220px] w-full pt-5 md:pt-10 lg:pt-20 flex flex-col md:flex-row  justify-between bg-amber-300">
        <div className="w-[100%] md:w-[15%] text-center md:text-start">
          <p>[About Us]</p>
        </div>
        <div className="w-[100%] md:w-[85%] flex flex-col lg:flex-row  justify-between  gap-5 lg:gap-0 pt-5 md:pt-0 bg-red-400">
          <div className="w-[100%]  md:w-[400px] ">
            <h1 className="text-[20px] md:text-[30px] xl:text-[40px] text-center md:text-start font-bold ">
              Discover Our Story and What Drives Us
            </h1>
          </div>
          <div className="w-[100%] md:w-[600px] flex flex-col justify-center items-center md:items-start text-center md:text-start ">
            <p>
              Founded with a passion for adventure and commitment to
              comfort,Wanderlust Inn was designed to be more than just a place
              to stay - it's a retreat for those with a love for exploration
            </p>
            <span className="bg-foreground h-[30px] w-[130px] text-white flex items-center justify-center rounded-4xl mt-[20px]">
              Learn More
            </span>
          </div>
        </div>
      </div>
      {/* --------------------Cards------------------- */}
      <div className="h-[100%] lg:h-[480px] w-full flex flex-col lg:flex-row items-center lg:items-center justify-center  gap-5 mt-15 bg-blue-400">
        <div className="relative h-[350px] w-[100%] md:w-[500px]  bg-foreground rounded-2xl overflow-hidden  text-white px-5 pt-3">
          <h2 className="text-[30px]  xl:text-[35px]">
            Unforgettable Stays,
            <br /> Unbeatable Offers
          </h2>
          <p className="text-[15px]">
            Discover breaking destinations relax in style, and enjoy incredible
            savings on your escape
          </p>
          <span className="absolute bottom-2 bg-white text-foreground py-2 px-3 rounded-4xl cursor-pointer">
            Learn More
          </span>
        </div>
        <div className="h-[350px] lg:h-[400px] w-[100%] md:w-[500px]  rounded-2xl overflow-hidden">
          <Image
            src="/about/about-img-1.jpg"
            alt="background-img"
            width={400}
            height={50}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-[350px] lg:h-[450px] w-[100%] md:w-[500px]  rounded-2xl overflow-hidden">
          {" "}
          <Image
            src="/about/about-img-2.jpg"
            alt="background-img"
            width={400}
            height={50}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
