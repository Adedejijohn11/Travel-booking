export type Booking = {
  checkin: string;
  checkout: string;
};

export type datatypes = {
  id: number;
  title: string;
  description: string;
  image: string[];
  bookedDates?: Booking[];
  price: string;
  maxGuests: number;
  bed: number;
  livingRoom: number;
  bathRoom: number;
};
