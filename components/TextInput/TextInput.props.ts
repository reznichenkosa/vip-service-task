import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";

export interface TextInputProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string;
}
