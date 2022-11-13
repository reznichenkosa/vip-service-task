import { StaticImageData } from "next/image";

export interface IPoint {
  date: string;
  city: string;
}

export interface ITimeVariant {
  id: number;
  from: string;
  to: string;
}

export interface ITicket {
  iconAirline: StaticImageData;
  airline: string;
  baggage: {
    small: boolean;
    big: boolean;
  };
  price: number;
  isReturn: boolean;
  fromPoint: IPoint;
  toPoint: IPoint;
  timeVariants: ITimeVariant[];
}

export interface IResponse {
  ticket: ITicket;
  returnTicket: ITicket | null;
}

export interface IFormData {
  fromCity: string;
  toCity: string;
  startDate: string;
  endDate: string;
}
