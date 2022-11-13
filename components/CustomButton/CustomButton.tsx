import React, { FC } from "react";
import styles from "./CustomButton.module.css";
import { CustomButtonProps } from "./CustomButton.props";

const CustomButton: FC<CustomButtonProps> = ({ children, ...otherProps }) => {
  return (
    <button className={styles.button} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
