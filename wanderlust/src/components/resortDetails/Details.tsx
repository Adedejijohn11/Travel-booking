import Image from "next/image";
import React from "react";
import SearchForm from "../SearchForm";

const Details = ({ resort }: { resort: any }) => {
  return (
    <div className="h-full w-full  ">
      <div className="flex flex-col">
        <div className="flex p-1 gap-2 rounded-[10px]  border-1  border-foreground">
          <span className="h-[35px] w-[300px]  flex items-center justify-center rounded-[10px] border-1 border-foreground  bg-green-400">
            Details
          </span>
          <span className="h-[35px] w-[300px]  flex items-center justify-center rounded-[10px] border-1 border-foreground">
            Resort Feature
          </span>
          <span className="h-[35px] w-[300px] flex items-center justify-center rounded-[10px] border-1 border-foreground ">
            Location
          </span>
        </div>
        <div className="h-[500px] mt-5 rounded-[10px] overflow-hidden">
          <Image
            src={resort?.image[1]}
            alt={resort?.title}
            width={500}
            height={100}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-3">{resort?.title}</h1>
          <p>{resort?.description}</p>
        </div>
      </div>
      {/* <div className="w-[30%] flex flex-col gap-5  ">
        <div className="flex flex-col p-2 rounded-[10px] border-1 border-foreground">
          <h3 className="text-[20px] mb-3">Contact Us</h3>
          <p className="flex justify-between">
            Email <span>reservations@gamil.com</span>
          </p>
          <p className="flex justify-between">
            Number <span>+453 837-3909</span>
          </p>
        </div>
        <div className="flex flex-col p-2 rounded-[10px] border-1 border-foreground">
          <SearchForm layout="column" autoSearch={true} />
          <div className="flex justify-between mt-20 mb-5">
            <p>Price Pernight</p>
            <span>{resort?.price}</span>
          </div>
          <button className="text-white flex justify-center p-2 rounded-2xl bg-foreground">
            Reserve
          </button>
        </div>
      </div> */}

      {/* <div>
        
        
      </div> */}
    </div>
  );
};

export default Details;
