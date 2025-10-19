import React from "react";
import { IoIosSend } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="h-[500px] w-[100%]  bg-foreground flex flex-col mt-5 px-3 text-background ">
      <div className="h-[450px] w-[100%] flex flex-row pt-10 px-3 ">
        <div className="w-[40%] flex flex-col ">
          <div className=" w-[450px] h-[380px] flex flex-col ">
            <div className="w-[370px] flex flex-col">
              <h1 className="text-2xl">WanderLust Inn</h1>
              <p className="text-[14px] text-green-600 mt-3">
                with Moderm amenities and personalized service, it's the perfect
                haven for those seeking adventure and relaxation
              </p>
            </div>

            <div className="flex flex-col mt-10">
              <label htmlFor="email" className="text-[18px] font-bold">
                Sign Up for our newsletter
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="h-[40px] border-none outline-0 bg-green-800 rounded-[10px] pl-[15px] mt-2"
              />
              <button className="w-[100px] bg-background text-foreground p-2 rounded-[10px] mt-5">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="w-[60%] ">
          <div className="h-[380px] flex flex-col items-end ">
            <div className="h-[80px] w-[170px] flex flex-row justify-end items-center text-foreground gap-2.5">
              <div className="rounded-full p-2 bg-white ">
                <FaSquareXTwitter />
              </div>
              <div className="rounded-full p-2 bg-white ">
                <IoIosSend />
              </div>
              <div className="rounded-full p-2 bg-white ">
                <FaFacebook />
              </div>
              <div className="rounded-full p-2 bg-white ">
                <FaInstagram />
              </div>
            </div>
            <div className="w-[700px] mt-10 flex flex-row justify-between text-green-600  ">
              <div className="flex flex-col">
                <h2 className="text-[20px] text-background">Explore</h2>
                <span className="text-[15px] mt-2">Destinations</span>
                <span className="text-[15px]">Adventure Trips</span>
                <span className="text-[15px]">Cultural Experiences</span>
                <span className="text-[15px]">Family Gateways</span>
              </div>
              <div className="flex flex-col ">
                <h2 className="text-[20px] text-background">About Us</h2>
                <span className="mt-2">Our Story</span>
                <span className="text-[15px]">Why Choose Pathfinder</span>
                <span className="text-[15px]">Meet the Team</span>
                <span className="text-[15px]">Testimonials </span>
                <span className="text-[15px]">Blog</span>
              </div>
              <div className="flex flex-col ">
                <h2 className="text-[20px] text-background">
                  Customer Support
                </h2>
                <span className="mt-2">FAQs</span>
                <span className="text-[15px]">Contact Us</span>
                <span className="text-[15px]"> Travel Insurance</span>
                <span className="text-[15px]">Cancellation Policy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-[50px] flex flex-row justify-between items-center border-t-2 border-green-900">
        <span>Terms & Conditions</span>
        <span>Copy 2025.ALL Right Reserved </span>
        <span>Cookies Policy</span>
      </div>
    </div>
  );
};

export default Footer;
