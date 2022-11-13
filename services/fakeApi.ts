import { IResponse, IFormData, ITicket, ITimeVariant } from "../interfaces/data.interface";
import AirLineIcon from "../assets/icons/seven.png";

const initData = (
  date: string,
  fromCity: string,
  toCity: string,
  timeVariants: ITimeVariant[] | [],
  price: number
): ITicket => {
  const data: ITicket = {
    iconAirline: AirLineIcon,
    airline: "S7 Airlines",
    baggage: {
      small: true,
      big: true,
    },
    price,
    isReturn: false,
    fromPoint: {
      date: date?.split("-").reverse().join("."),
      city: fromCity,
    },
    toPoint: {
      date: date?.split("-").reverse().join("."),
      city: toCity,
    },
    timeVariants: [
      {
        id: 1,
        from: "09:20",
        to: "11:05",
      },
      ...timeVariants,
    ],
  };
  return data;
};

export const fakeFetchingData = ({
  fromCity,
  toCity,
  endDate,
  startDate,
}: IFormData): IResponse => {
  const timeVariant: ITimeVariant[] = [
    {
      id: 2,
      from: "10:20",
      to: "12:05",
    },
    { id: 3, from: "11:20", to: "13:05" },
  ];

  if (endDate) {
    return {
      ticket: { ...initData(startDate, fromCity, toCity, [], 4150) },
      returnTicket: { ...initData(endDate, toCity, fromCity, [], 4150) },
    };
  }

  return {
    ticket: { ...initData(startDate, fromCity, toCity, timeVariant, 4150) },
    returnTicket: null,
  };
};
