"use client";

import { useState } from "react";
import { useGlobalContext } from "@/app/contexts/globalContext";
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
  const [guests, setGuests] = useState<number>(search.guests);

  // flatten all booked date ranges from all rooms
  const bookedRanges = data.flatMap((room) =>
    room.bookedDates.map((b) => ({
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
        layout === "row" ? "flex-row" : "flex-col"
      } gap-4 bg-white p-6 `}
    >
      {/* Check-in */}
      <div className="flex flex-col">
        <label className="text-sm font-semibold mb-1">Check-in</label>
        <DatePicker
          selected={checkin}
          onChange={(date) => setCheckIn(date)}
          filterDate={(date) => !isDateBooked(date)}
          dayClassName={(date) =>
            isDateBooked(date)
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "text-black hover:bg-blue-100 cursor-pointer"
          }
          className="border-b-2 p-2 w-full"
        />
      </div>
    </form>
  );
};

export default SearchForm;
