import { ITicket } from "./../../interfaces/data.interface";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface TicketInfoProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  ticket: ITicket;
}
