"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import resortsData from "@/data/data.json";
import { useGlobalContext } from "@/app/contexts/globalContext";
import { filterResorts } from "@/utils/filterResort";
import Image from "next/image";

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

  return (
    <div className="h-[300px] w-full bg-green-600 mt-20">
      <div>
        {/* <div className="w-[300px] ">
          <Image
            src={resort?.image}
            alt={resort?.title}
            width={500}
            height={100}
            className="h-full w-full object-cover"
          />
        </div> */}

        <p>{resort?.description}</p>
      </div>
    </div>
  );
};

export default ResortDetailPage;
