"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import resortsData from "@/data/data.json";
import { useGlobalContext } from "@/app/contexts/globalContext";
import { filterResorts } from "@/utils/filterResort";
import Details from "@/components/resortDetails/Details";
import ResortFeature from "@/components/resortDetails/resortFeature";
import SearchForm from "@/components/SearchForm";
import Location from "@/components/resortDetails/Location";

const ResortDetailPage = () => {
  const { id } = useParams();
  const { search } = useGlobalContext();
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const resort = resortsData.find((r) => r.id === Number(id));

  useEffect(() => {
    if (
      resort &&
      search?.checkin &&
      search?.checkout &&
      typeof search?.guests === "number"
    ) {
      const available = filterResorts(
        [resort],
        search.checkin,
        search.checkout,
        search.guests
      );
      setIsAvailable(available.length > 0);
    } else {
      setIsAvailable(null);
    }
  }, [resort, search?.checkin, search?.checkout, search?.guests]);

  // Handle if no resort found
  if (!resort) {
    return <div className="text-center py-10 ">Resort not found.</div>;
  }

  return (
    <div className="h-full w-full flex gap-2 mt-[70px] px-2 ">
      <div className="w-[70%] flex flex-col">
        <Details resort={resort} />
        <ResortFeature resort={resort} />
        <Location />
      </div>
      <div className="w-[30%] flex flex-col gap-5  ">
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
      </div>
    </div>
  );
};

export default ResortDetailPage;
