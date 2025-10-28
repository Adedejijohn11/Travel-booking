"use client";

import { useState } from "react";
import { useGlobalContext } from "@/app/contexts/globalContext";
import { IoIosSearch } from "react-icons/io";
// import Router, { useRouter } from "next/router";
import data from "@/data/data.json";
import { addDays, isWithinInterval, parseISO } from "date-fns";
import DatePicker from "react-datepicker";

interface SearchFormProps {
  layout?: "row" | "column";
}

const SearchForm = ({ layout = "row" }: SearchFormProps) => {
  const { search, setSearch } = useGlobalContext();
  // const router = useRouter();

  const [checkin, setCheckIn] = useState<Date | null>(search.checkin);
  const [checkout, setCheckout] = useState<Date | null>(search.checkout);
  const [guests, setGuests] = useState<number | null>(search.guests || null);

  // flatten all booked date ranges from all rooms
  const bookedRanges = data.flatMap((room) =>
    (room.bookedDates ?? []).map((b) => ({
      start: parseISO(b.checkin),
      end: parseISO(b.checkout),
    }))
  );

  // check if is already been booked
  const isDateBooked = (date: Date) => {
    return bookedRanges.some((range) =>
      isWithinInterval(date, {
        start: range.start,
        end: addDays(range.end, -1),
      })
    );
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearch({ checkin, checkout, guests });
    // router.push(/result)
  };

  return (
    <form
      onSubmit={handleSearch}
      className={`flex ${
        layout === "row" ? "flex-col lg:flex-row" : "flex-col"
      } gap-5 `}
    >
      {/* Check-in */}
      <div className="flex flex-col">
        <label className="text-sm  mb-1">Check-in</label>
        <DatePicker
          selected={checkin}
          onChange={(date) => setCheckIn(date)}
          placeholderText="Select check-in date"
          filterDate={(date) => !isDateBooked(date)}
          dayClassName={(date) =>
            isDateBooked(date)
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "text-black hover:bg-blue-100 cursor-pointer"
          }
          className="w-[100%] md:w-[400px] lg:w-[250px] xl:w-[410px] border-b-2 py-1 border-gray-300 "
        />
      </div>

      {/* Check-out */}
      <div className="flex flex-col">
        <label className="text-sm  mb-1">Check-out</label>
        <DatePicker
          selected={checkout}
          onChange={(date) => setCheckout(date)}
          placeholderText="Select check-out date"
          minDate={checkin || new Date()}
          filterDate={(date) => !isDateBooked(date)}
          dayClassName={(date) =>
            isDateBooked(date)
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "text-black hover:bg-blue-100 cursor-pointer"
          }
          className="w-[100%] md:w-[400px] lg:w-[250px] xl:w-[410px] border-b-2 py-1 border-gray-300 "
        />
      </div>

      {/* Guest */}
      <div className="flex flex-col">
        <label className="text-sm  mb-2">Guests</label>

        <select
          value={guests ?? ""}
          onChange={(e) => setGuests(Number(e.target.value))}
          className="w-[100%] md:w-[400px] lg:w-[250px] xl:w-[410px] border-b-2 py-1  border-gray-300"
        >
          <option value="" disabled>
            Select guests
          </option>
          <option value={1}>1-person</option>
          <option value={2}>2-people</option>
          <option value={3}>3-people</option>
          <option value={4}>4-people</option>
        </select>
      </div>

      <button
        type="submit"
        className="h-[50px] w-[100%] md:w-[400px] lg:w-[190px]  xl:w-[200px] flex  justify-center items-center gap-5 rounded-full text-white bg-foreground"
      >
        Search
        <span>
          <IoIosSearch />
        </span>
      </button>
    </form>
  );
};

export default SearchForm;
