import React, { FC } from "react";
import styles from "./DateInput.module.css";
import { DateInputProps } from "./DateInput.props";
import cn from "classnames";

const DateInput: FC<DateInputProps> = ({ children, className, label, ...otherProps }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>
      <input type="date" className={cn(styles.input, className)} {...otherProps} />
    </div>
  );
};

export default DateInput;
