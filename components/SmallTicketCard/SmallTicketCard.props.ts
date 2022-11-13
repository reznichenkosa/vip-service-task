import { ITicket } from "./../../interfaces/data.interface";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SmallTicketCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  ticket: ITicket;
}
