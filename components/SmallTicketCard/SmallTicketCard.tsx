import React, { FC } from "react";
import styles from "./SmallTicketCard.module.css";
import TicketInfo from "../TicketInfo/TicketInfo";
import { SmallTicketCardProps } from "./SmallTicketCard.props";

const SmallTicketCard: FC<SmallTicketCardProps> = ({ ticket }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.ticket}>
        <TicketInfo ticket={ticket} />
        <div className={styles.right}>
          {ticket.price.toLocaleString("ru-RU", {
            style: "currency",
            currency: "RUB",
            minimumFractionDigits: 0,
          })}
        </div>
      </div>
    </div>
  );
};

export default SmallTicketCard;
