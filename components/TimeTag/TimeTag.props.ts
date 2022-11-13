import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ITimeVariant } from "../../interfaces/data.interface";

export interface TimeTagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  time: ITimeVariant;
  isSelected: boolean;
}
