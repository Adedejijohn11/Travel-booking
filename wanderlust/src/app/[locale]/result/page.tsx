"use client";

import React, { useEffect, useState } from "react";
import resortData from "@/data/data.json";
import Image from "next/image";
import SearchForm from "@/components/SearchForm";
import { useGlobalContext } from "@/app/contexts/globalContext";
import { filterResorts } from "@/utils/filterResort";
import { Link } from "@/i18n/navigation";
import { IoIosPeople } from "react-icons/io";
import { FaBed } from "react-icons/fa6";

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
    <div className="h-[100%] w-[100%] flex justify-center ">
      <div className="h-[100%] w-[90%] mt-[90px] flex flex-col lg:flex-row gap-[50px] ">
        <div className="w-full lg:w-[40%] ">
          <SearchForm layout="column" autoSearch={true} />
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-5 bg-green-400">
          {availableResorts.length === 0 ? (
            <p className="flex justify-center items-center h-[250px] w-[100%] text-2xl ">
              No resorts available for your selected dates.
            </p>
          ) : (
            availableResorts.map((resort) => (
              <div
                key={resort.id}
                className="flex flex-col lg:flex-row bg-green-50"
              >
                <Link
                  href={`/resort/${resort.id}`}
                  className="h-[300px] w-full lg:w-[300px]"
                >
                  <Image
                    src={resort.image[1]}
                    alt={resort.title}
                    width={500}
                    height={100}
                    className="h-full w-full object-cover"
                  />
                </Link>
                <div className="relative w-full lg:w-[501px] p-4 flex flex-col justify-between ">
                  <div className="flex justify-between">
                    <p className="text-[20px]">{resort.title}</p>
                    <p className="text-[20px]">{resort.price}</p>
                  </div>
                  <div className="flex gap-2 ">
                    <p className="flex gap-1 ">
                      <span className="text-2xl">
                        <IoIosPeople />
                      </span>
                      {resort.maxGuests} |
                    </p>

                    <p className="flex gap-1 ">
                      <span className="text-2xl">
                        <FaBed />
                      </span>
                      {resort.bed}
                    </p>
                  </div>
                  <Link href={`/resort/${resort.id}`}>
                    <button className="w-[300px] border-2 border-foreground">
                      View
                    </button>
                  </Link>
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
