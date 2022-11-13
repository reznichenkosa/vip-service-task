import React, { FC } from "react";
import styles from "./TextInput.module.css";
import { TextInputProps } from "./TextInput.props";

const TextInput: FC<TextInputProps> = ({ children, label, ...otherProps }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>
      <input className={styles.input} {...otherProps} />
    </div>
  );
};

export default TextInput;
