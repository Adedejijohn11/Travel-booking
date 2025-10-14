import Image from "next/image";
import React from "react";

const SectionTwo = () => {
  return (
    <div className="flex flex-col px-5">
      <div className="h-[220px] w-full pt-20 flex flex-row justify-between ">
        <div className="w-[15%]">
          <p>[About Us]</p>
        </div>
        <div className="w-[85%] flex flex-row   justify-between">
          <div className="w-[400px] ">
            <h1 className="text-[40px] font-bold">
              Discover Our Story and What Drives Us
            </h1>
          </div>
          <div className="flex flex-col w-[600px]">
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
      <div className="h-[480px] w-full flex gap-5 mt-15 ">
        <div className="relative h-[350px] w-[500px] bg-foreground rounded-2xl overflow-hidden  text-white px-5 pt-3">
          <h2 className="text-[35px]">
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
        <div className="h-[400px] w-[500px] rounded-2xl overflow-hidden">
          <Image
            src="/about/about-img-1.jpg"
            alt="background-img"
            width={400}
            height={50}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-[450px] w-[500px]  rounded-2xl overflow-hidden">
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
