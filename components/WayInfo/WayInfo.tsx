import React, { FC } from "react";
import styles from "./WayInfo.module.css";
import { WayInfoProps } from "./WayInfo.props";

const WayInfo: FC<WayInfoProps> = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.divider}>
        <div className={styles.pointFrom}>svo</div>
        <div className={styles.pointTo}>rov</div>
      </div>
      <div className={styles.timeWay}>В пути 1 ч 45 мин</div>
    </div>
  );
};

export default WayInfo;
