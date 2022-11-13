import React, { FC } from "react";
import styles from "./TimeTag.module.css";
import cn from "classnames";
import { TimeTagProps } from "./TimeTag.props";

const TimeTag: FC<TimeTagProps> = ({ time, isSelected, ...otherProps }) => {
  return (
    <div className={cn(styles.timeTag, { [styles.active]: isSelected })} {...otherProps}>
      <span className={styles.timeFrom}>{time.from}</span>
      <span>-</span>
      <span className={styles.timeTo}>{time.to}</span>
    </div>
  );
};

export default TimeTag;
