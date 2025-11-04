"use client";

import React, { useEffect, useState } from "react";
import resortData from "@/data/data.json";
import Image from "next/image";
import SearchForm from "@/components/SearchForm";
import { useGlobalContext } from "@/app/contexts/globalContext";
import { filterResorts } from "@/utils/filterResort";

const page = () => {
  const { search } = useGlobalContext();
  const [availableResorts, setAvailableResorts] = useState(resortData);

  useEffect(() => {
    if (search.checkin && search.checkout && search.guests) {
      const filtered = filterResorts(
        resortData,
        search.checkin,
        search.checkout,
        search.guests
      );

      setAvailableResorts(filtered);
    } else {
      setAvailableResorts(resortData);
    }
  }, [search.checkin, search.checkout, search.guests]);

  return (
    <div className="h-[100%] w-[100%] flex justify-center bg-cyan-500">
      <div className="h-[100%] w-[90%] mt-[60px] flex flex-row gap-8  bg-amber-300">
        <div className="w-[40%] bg-red-500">
          <SearchForm layout="column" autoSearch={true} />
        </div>
        <div className=" w-[60%] flex flex-col gap-5 bg-green-400">
          {availableResorts.length === 0 ? (
            <p className="flex justify-center items-center h-[250px] w-[100%] text-2xl ">
              No resorts available for your selected dates.
            </p>
          ) : (
            availableResorts.map((resort) => (
              <div
                key={resort.id}
                className="h-[300px]  flex flex-row  bg-green-50 "
              >
                <div className="w-[300px] ">
                  <Image
                    src={resort.image[1]}
                    alt={resort.title}
                    width={500}
                    height={100}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="w-[489px] ">
                  <div className="flex  justify-between p-4">
                    <p>{resort.title}</p>
                    <p>{resort.price}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
