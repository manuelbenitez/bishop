import React from "react";
import { BodyFour } from "../../typography/common";
import { manatee } from "../../typography/common/colors";
import { ICalendarWeekdaysProps } from "../types/types";
import styles from "./calendar-weekdays.module.scss";

const CalendarWeekdays = ({ weekdays }: ICalendarWeekdaysProps) => {
  return (
    <div className={styles["calendar-weekdays"]}>
      {weekdays.map((weekday, i) => (
        <div key={i} className={styles["calendar-weekdays__weekday"]}>
          <BodyFour label={weekday} color={manatee} />
        </div>
      ))}
    </div>
  );
};

export default CalendarWeekdays;
