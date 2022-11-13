import React, { FC } from "react";
import styles from "./BigTicketCard.module.css";
import TicketInfo from "../TicketInfo/TicketInfo";
import { BigTicketCardProps } from "./BigTicketCard.props";

const BigTicketCard: FC<BigTicketCardProps> = ({ ticket, returnTicket }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.ticket}>
        <div className={styles.ticketGroup}>
          <TicketInfo ticket={ticket} />
          <div className={styles.divider}></div>
          <TicketInfo ticket={returnTicket} />
        </div>
        <div className={styles.right}>
          {(ticket.price + returnTicket.price).toLocaleString("ru-RU", {
            style: "currency",
            currency: "RUB",
            minimumFractionDigits: 0,
          })}
        </div>
      </div>
    </div>
  );
};

export default BigTicketCard;
