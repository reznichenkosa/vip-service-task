import React, { FC } from "react";
import styles from "./PointInfo.module.css";
import { PointInfoProps } from "./PointInfo.props";

const PointInfo: FC<PointInfoProps> = ({ point, time }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.time}>{time}</div>
      <div className={styles.city}>{point.city}</div>
      <div className={styles.date}>{point.date}</div>
    </div>
  );
};

export default PointInfo;
