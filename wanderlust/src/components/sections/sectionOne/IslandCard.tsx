"use client";

import Image from "next/image";
import data from "@/data/data.json";
import React, { useEffect, useState } from "react";
import { datatypes } from "@/types/dataTypes";
import ReactPaginate from "react-paginate";

import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const IslandCard = () => {
  const islandData: datatypes[] = data;
  const [pageNumber, setPageNumber] = useState(0);
  const [currentImg, setCurrentImg] = useState<string>("");

  const usersPerPage = 1;

  const pagesVisted = pageNumber * usersPerPage;

  const pageCount = Math.ceil(islandData.length / usersPerPage);

  const displayUser = islandData.slice(pagesVisted, pagesVisted + usersPerPage);

  const ChangePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    const currentItem = displayUser[0]; // since only 1 item per page
    if (currentItem) {
      setCurrentImg(currentItem.image[2]);
    }
  }, [displayUser]);

  return (
    <div className=" h-full w-full flex flex-row mt-10">
      {/* <div> */}

      {displayUser.map((data) => (
        <div key={data.id} className=" w-[80%] flex flex-row gap-3">
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
            <div className="absolute bottom-0 right-3 flex flex-row items-center justify-center  gap-4 ">
              <p className=" flex justify-center text-center text-[18px]  w-full text-gray-500 ">
                {pageNumber + 1} / {pageCount}
              </p>

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
                pageRangeDisplayed={0} // hide page numbers
                marginPagesDisplayed={0} // hide page numbers
              />
              {/* </div> */}
            </div>
          </div>
        </div>
      ))}

      <div className="relative w-[20%] ">
        <div className="absolute bottom-0 h-[300px] w-full  rounded-l-3xl overflow-hidden">
          {currentImg && (
            <Image
              src={currentImg}
              alt="background-img"
              width={400}
              height={50}
              className="h-full w-full object-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default IslandCard;
