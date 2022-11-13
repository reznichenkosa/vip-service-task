import React, { FC, useState } from "react";
import styles from "./TicketInfo.module.css";
import AirLogo from "../../assets/icons/seven.png";
import Image from "next/image";
import SmallBaggageIcon from "../../assets/icons/smallBaggage.png";
import BigBaggageIcon from "../../assets/icons/bigBaggage.png";
import { TicketInfoProps } from "./TicketInfo.props";
import cn from "classnames";
import PointInfo from "../PointInfo/PointInfo";
import WayInfo from "../WayInfo/WayInfo";
import TimeTag from "../TimeTag/TimeTag";
import { ITimeVariant } from "../../interfaces/data.interface";

const TicketInfo: FC<TicketInfoProps> = ({ ticket, className }) => {
  const [selectedTime, setSelectedTime] = useState<ITimeVariant>(ticket.timeVariants[0]);

  const changeTimeHandler = (item: ITimeVariant) => {
    setSelectedTime(item);
  };

  return (
    <div className={cn(styles.ticket, className)}>
      <div className={styles.type}>{ticket.isReturn ? "Возвратный" : "Невозратный"}</div>
      <div className={styles.left}>
        <Image className={styles.logo} src={ticket.iconAirline} alt={ticket.airline} />
        <span className={styles.name}>{ticket.airline}</span>
      </div>
      <div className={styles.right}>
        <div className={styles.info}>
          <PointInfo point={ticket.fromPoint} time={selectedTime.from} />
          <WayInfo />
          <PointInfo point={ticket.toPoint} time={selectedTime.to} />
          <div className={styles.infoBaggage}>
            {ticket.baggage.small && <Image src={SmallBaggageIcon} alt="smallBaggage" />}
            {ticket.baggage.big && <Image src={BigBaggageIcon} alt="bigBaggage" />}
          </div>
        </div>
        {ticket.timeVariants.length > 1 && (
          <div className={styles.timeTags}>
            {ticket.timeVariants.map((item) => (
              <TimeTag
                onClick={() => changeTimeHandler(item)}
                isSelected={selectedTime.id === item.id}
                key={item.id}
                time={item}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketInfo;
