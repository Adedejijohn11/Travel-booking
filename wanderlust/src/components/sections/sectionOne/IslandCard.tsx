"use client";

import Image from "next/image";
import data from "@/data/data.json";
import React, { useState } from "react";
import { datatypes } from "@/types/dataTypes";
import ReactPaginate from "react-paginate";

import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const IslandCard = () => {
  const islandData: datatypes[] = data;
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 1;
  const pagesVisted = pageNumber * usersPerPage;
  const pageCount = Math.ceil(islandData.length / usersPerPage);

  const displayUses = islandData.slice(pagesVisted, pagesVisted + usersPerPage);

  const ChangePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };

  return (
    <div className=" h-full w-full flex flex-row mt-10  ">
      {/* <div> */}

      {displayUses.map((data) => (
        <div key={data.id} className=" w-[80%] flex flex-row gap-3 ">
          <div className="h-[380px] w-[50%] rounded-[30px] overflow-hidden">
            <Image
              src={data.image[0]}
              alt="background-img"
              width={400}
              height={50}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative h-[380px] w-[50%] flex flex-col justify-between">
            <div className="pt-5">
              <h2 className="text-2xl">{data.title}</h2>
              <p>{data.description}</p>
            </div>

            <div className="h-[150px] w-[200px] rounded-2xl overflow-hidden">
              <Image
                src={data.image[1]}
                alt="background-img"
                width={400}
                height={50}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-3">
              <ReactPaginate
                previousLabel={<IoIosArrowRoundBack />}
                nextLabel={<IoIosArrowRoundForward />}
                pageCount={pageCount}
                forcePage={pageNumber}
                onPageChange={ChangePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IslandCard;
