import { ITicket } from "./../../interfaces/data.interface";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface BigTicketCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  ticket: ITicket;
  returnTicket: ITicket;
}
