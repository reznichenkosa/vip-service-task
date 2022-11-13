import { IPoint } from "./../../interfaces/data.interface";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface PointInfoProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  point: IPoint;
  time: string;
}
