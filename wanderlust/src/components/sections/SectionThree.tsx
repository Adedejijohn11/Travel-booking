import Image from "next/image";
import React from "react";

const SectionThree = () => {
  return (
    <div className="relative">
      <div className="h-[650px] w-full rounded-4xl overflow-hidden ">
        <Image
          src="/booking-bg.jpg"
          alt="background-img"
          width={400}
          height={50}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute top-[20%] left-[600px] text-center bg-white h-[350px] w-[420px] flex flex-col justify-center items-center  rounded-3xl">
        <div className="w-[300px]">
          <h1 className="text-[25px] font-bold">
            Stay Connected with Wanderlust Inn
          </h1>
        </div>
        <div className="relative h-[150px] w-[380px]  my-5 overflow-hidden rounded-2xl">
          <Image
            src="/about/about-img-2.jpg"
            alt="background-img"
            width={400}
            height={50}
            className="h-full w-full object-cover"
          />
          <div className="absolute top-[40px] left-[120px] ">
            <button className="mt-5 h-[40px] w-[150px] rounded-full bg-foreground text-white">
              Booking Now
            </button>
          </div>
        </div>
        <div className="w-[350px]">
          <p className="text-[13px]">
            Never miss a moment with Stacy Connected, your go-to platform for
            updates, news and exclusive content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
