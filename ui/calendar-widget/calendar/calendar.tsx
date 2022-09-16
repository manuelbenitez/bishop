import React from "react";
import styles from "./calendar.module.scss";
import CalendarWeekdays from "../calendar-weekdays/calendar-weekdays";
import CalendarDays from "../calendar-days/calendar-days";
import { ICalendarDaysProps } from "../types/types";
import { labels } from "../constants/labels";
const Calendar = (props: ICalendarDaysProps) => {
  const {
    daysOfCurrentMonth,
    setDaysOfCurrentMonth,
    arrayOfSelectedDates,
    handleDates,
    startDate,
    endDate,
  } = props;
  return (
    <div className={styles["calendar__container"]}>
      <CalendarWeekdays weekdays={labels.weekdays} />
      <CalendarDays
        daysOfCurrentMonth={daysOfCurrentMonth}
        setDaysOfCurrentMonth={setDaysOfCurrentMonth}
        arrayOfSelectedDates={arrayOfSelectedDates}
        handleDates={handleDates}
        startDate={startDate}
        endDate={endDate}
      />
    </div>
  );
};

export default Calendar;
