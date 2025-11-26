import Image from "next/image";
import React, { useState } from "react";
import SearchForm from "../SearchForm";

const Details = ({ resort }: { resort: any }) => {
  const [sectionId, setSectionId] = useState("details");

  const handleChange = (sectionId: string) => {
    setSectionId(sectionId);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="details" className="h-full w-full">
      <div className="flex flex-col">
        <div className="flex p-1 gap-2 rounded-[10px]  border-1  border-foreground">
          <button
            onClick={() => handleChange("details")}
            className={`h-[35px] w-[100%]  flex items-center justify-center rounded-[10px] border-1 border-foreground ${
              sectionId === "details" ? "bg-foreground text-white" : "bg-white"
            }`}
          >
            Details
          </button>
          <button
            onClick={() => handleChange("resortFeature")}
            className={`h-[35px] w-[100%]  flex items-center justify-center rounded-[10px] border-1 border-foreground ${
              sectionId === "resortFeature"
                ? "bg-foreground text-white"
                : "bg-white"
            }`}
          >
            Resort Feature
          </button>
          <button
            onClick={() => handleChange("location")}
            className={`h-[35px] w-[100%] flex items-center justify-center rounded-[10px] border-1 border-foreground ${
              sectionId === "location" ? "bg-foreground text-white" : "bg-white"
            }`}
          >
            Location
          </button>
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
    </div>
  );
};

export default Details;
