"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import resortsData from "@/data/data.json";
import { useGlobalContext } from "@/app/contexts/globalContext";
import { filterResorts } from "@/utils/filterResort";
import Image from "next/image";
import Details from "@/components/resortDetails/Details";
import ResortFeature from "@/components/resortDetails/resortFeature";
import SearchForm from "@/components/SearchForm";

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
    return (
      <div className="text-center py-10 text-red-500">Resort not found.</div>
    );
  }

  return (
    <div className="h-full w-full  mt-[70px] px-2 ">
      <Details resort={resort} />
      <ResortFeature />
    </div>
  );
};

export default ResortDetailPage;
