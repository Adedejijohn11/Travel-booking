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

export const isDateAvailable = (
  date: Date,
  ranges: { start: Date; end: Date }[]
) => {
  return ranges.some((range) =>
    isWithinInterval(date, {
      start: range.start,
      end: addDays(range.end, -1),
    })
  );
};
