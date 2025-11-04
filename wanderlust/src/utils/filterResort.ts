// import { isDateAvailable } from "./dateUtils";

// export const filterRoomsByDate = (
//   rooms: any[],
//   checkin: Date,
//   checkout: Date
// ) => {
//   return rooms.filter((room) =>
//     room.availableDates?.some(
//       (range: any) =>
//         isDateAvailable(checkin, [range]) && isDateAvailable(checkout, [range])
//     )
//   );
// };

import { isWithinInterval, parseISO } from "date-fns";

export const filterResorts = (
  resorts: any[],
  checkin: Date,
  checkout: Date,
  guests: number
) => {
  return resorts.filter((resort) => {
    if (resort.maxGuests < guests) return false;

    resort.availableDates?.some((range: any) => {
      const start = parseISO(range.checkin);
      const end = parseISO(range.checkout);

      // user selected range must be within availability
      return (
        isWithinInterval(checkin, { start, end }) &&
        isWithinInterval(checkout, { start, end })
      );
    });
  });
};
