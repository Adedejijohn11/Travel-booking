import { parseISO, isWithinInterval, addDays } from "date-fns";

export type DateRange = { checkin: string; checkout: string };

export const getGlobalAvailableRanges = (data: any[]) => {
  return data.flatMap((item) =>
    (item.availableDates ?? []).map((a: DateRange) => ({
      start: parseISO(a.checkin),
      end: parseISO(a.checkout),
    }))
  );
};

// Checks if a given date is within the available ranges of that resort
export const isDateAvailable = (
  date: Date,
  availableRanges: { start: Date; end: Date }[]
) => {
  return availableRanges.some((range) =>
    isWithinInterval(date, {
      start: range.start,
      end: addDays(range.end, +1),
    })
  );
};
