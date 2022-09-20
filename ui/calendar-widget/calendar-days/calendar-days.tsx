import React from "react";
import styles from "./calendar-days.module.scss";
import {
  getWeekday,
  createDaysOfPreviousMonth,
  isFirst,
  isLast,
} from "./utils";
import {
  ICalendarDaysProps,
  IHighlightedDateProps,
  IRegularDateProps,
} from "../types/types";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { BodyOne } from "../../typography/common";
import { black, manatee } from "../../typography/common/colors";

dayjs.extend(isBetween);
const CalendarDays = ({
  daysOfCurrentMonth,
  handleDates,
  startDate,
  endDate,
}: ICalendarDaysProps) => {
  const firstDayOfTheWeek = getWeekday(daysOfCurrentMonth[0].date);
  const daysOfPreviousMonth = createDaysOfPreviousMonth(firstDayOfTheWeek);

  const RegularDate = ({ dayOfCurrentMonth }: IRegularDateProps) => {
    const className = styles["calendar-days__not-selected"];
    return (
      <div
        className={className}
        onClick={() => {
          handleDates(dayOfCurrentMonth.date);
        }}
      >
        <BodyOne color={manatee} label={String(dayOfCurrentMonth.dayOfMonth)} />
      </div>
    );
  };
  const HighlightedDate = ({ dayOfCurrentMonth }: IHighlightedDateProps) => {
    const className = dayOfCurrentMonth.isFirst
      ? styles["calendar-days__selected-first"]
      : dayOfCurrentMonth.isLast
      ? styles["calendar-days__selected-last"]
      : styles["calendar-days__selected"];
    return (
      <div
        className={className}
        onClick={() => {
          handleDates(dayOfCurrentMonth.date);
        }}
      >
        <BodyOne color={black} label={String(dayOfCurrentMonth.dayOfMonth)} />
      </div>
    );
  };

  const calendarDays = daysOfCurrentMonth.map((dayOfCurrentMonth, i) => {
    const dateIsBetween = dayjs(dayOfCurrentMonth.date).isBetween(
      dayjs(endDate),
      dayjs(startDate),
      "day"
    );
    switch (dayOfCurrentMonth.date === startDate) {
      case true:
        isFirst(dayOfCurrentMonth);
        return (
          <HighlightedDate
            dayOfCurrentMonth={dayOfCurrentMonth}
            key={i + dayOfCurrentMonth.dayOfMonth}
          />
        );
      case false:
        switch (dayOfCurrentMonth.date === endDate) {
          case true:
            isLast(dayOfCurrentMonth);
            return (
              <HighlightedDate
                dayOfCurrentMonth={dayOfCurrentMonth}
                key={i + dayOfCurrentMonth.dayOfMonth}
              />
            );
          case false:
            if (dateIsBetween && endDate) {
              return (
                <HighlightedDate
                  dayOfCurrentMonth={dayOfCurrentMonth}
                  key={i + dayOfCurrentMonth.dayOfMonth}
                />
              );
            }
        }
      default:
        return (
          <RegularDate
            dayOfCurrentMonth={dayOfCurrentMonth}
            key={i + dayOfCurrentMonth.dayOfMonth}
          />
        );
    }
  });

  return (
    <div className={styles["calendar-days"]}>
      {daysOfPreviousMonth.map((day, index) => (
        <div key={index}>{day}</div>
      ))}
      {calendarDays}
    </div>
  );
};

export default CalendarDays;
