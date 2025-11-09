import React from "react";
import { FaWifi } from "react-icons/fa";
import { FaBath } from "react-icons/fa6";
import { FaCouch } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";

const ResortFeature = ({ resort }: { resort: any }) => {
  return (
    <div className=" h-full w-full pt-10">
      <h1 className="text-2xl mb-3">Resort Features</h1>
      <div className="rounded-[10px] px-4 border-1 border-foreground">
        <div className="h-[100px] flex justify-between ">
          <div className="flex items-center gap-2">
            <IoBedOutline className="text-2xl" />
            <p>
              <span className="mr-1">{resort?.bed}</span>
              Bedroom
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FaBath className="text-2xl" />
            <p>
              <span className="mr-1">{resort?.bathRoom}</span>
              Bathroom
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FaCouch className="text-2xl" />
            <p>
              <span className="mr-1">{resort?.livingRoom}</span>
              Livingroom
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FaWifi className="text-2xl" />
            <p>Free Wifi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResortFeature;
