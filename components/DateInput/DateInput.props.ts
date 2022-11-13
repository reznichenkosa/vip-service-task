import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";

export interface DateInputProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string;
}
