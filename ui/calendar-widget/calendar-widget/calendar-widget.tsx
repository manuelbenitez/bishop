import React, { useEffect } from "react";
import styles from "./calendar-widget.module.scss";
import dayjs from "dayjs";
import { ICalendarWidgetProps, IDayOfCurrentMonth } from "../types/types";
import { useState } from "react";
import Calendar from "../calendar/calendar";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { INITIAL_MONTH, INITIAL_YEAR } from "../constants/day-js.constants";
import {
  cancelFirst,
  cancelLast,
  createDaysOfCurrentMonth,
  pushNewDatesToArray,
} from "../calendar-days/utils";
import isBetween from "dayjs/plugin/isBetween";
import { BodyFour } from "../../typography/common";
import { manatee } from "../../typography/common/colors";
dayjs.extend(isBetween);

export const CalendarWidget = ({ labels }: ICalendarWidgetProps) => {
  const [currentMonth, setCurrentMonth] = useState(INITIAL_MONTH);
  const [currentYear, setCurrentYear] = useState(INITIAL_YEAR);
  const [daysOfCurrentMonth, setDaysOfCurrentMonth] = useState<
    IDayOfCurrentMonth[]
  >(createDaysOfCurrentMonth(INITIAL_YEAR, INITIAL_MONTH));
  const [arrayOfSelectedDates, setArrayOfSelectedDates] =
    useState<Array<string | undefined>>();
  const [startDate, setStartDate] = useState<string | undefined>(undefined);
  const [endDate, setEndDate] = useState<string | undefined>(undefined);

  function handleNext() {
    setCurrentMonth(currentMonth + 1);
    if (currentMonth === 12) {
      setCurrentMonth(1);
      setCurrentYear(currentYear + 1);
    }
  }
  function handlePrevious() {
    setCurrentMonth(currentMonth - 1);
    if (currentMonth === 1) {
      setCurrentMonth(12);
      setCurrentYear(currentYear - 1);
    }
  }

  const [clickCount, setClickCount] = useState<number>(1);
  function handleDates(dateClicked: string) {
    switch (clickCount) {
      case 1:
        setStartDate(dateClicked);
        setEndDate(undefined);
        daysOfCurrentMonth.forEach((dayOfCurrentMonth) => {
          if (dayOfCurrentMonth.isLast) {
            cancelLast(dayOfCurrentMonth);
          }
        });
        setClickCount(2);
        break;
      case 2:
        setEndDate(dateClicked);
        daysOfCurrentMonth.forEach((dayOfCurrentMonth) => {
          if (dayOfCurrentMonth.isFirst) {
            cancelFirst(dayOfCurrentMonth);
          }
        });
        if (startDate && dateClicked < startDate) {
          setEndDate(startDate);
          setStartDate(dateClicked);
        }
        setClickCount(3);
        break;
      case 3:
        setEndDate(undefined);
        daysOfCurrentMonth.forEach((dayOfCurrentMonth) => {
          if (dayOfCurrentMonth.isLast) {
            cancelLast(dayOfCurrentMonth);
          }
        });
        setClickCount(4);
        break;
      case 4:
        setEndDate(dateClicked);
        daysOfCurrentMonth.forEach((dayOfCurrentMonth) => {
          if (dayOfCurrentMonth.isFirst) {
            cancelFirst(dayOfCurrentMonth);
          }
          if (startDate && dateClicked < startDate) {
            setEndDate(startDate);
            setStartDate(dateClicked);
          }
        });
        setClickCount(1);
        break;
    }
  }
  useEffect(() => {
    setDaysOfCurrentMonth(createDaysOfCurrentMonth(currentYear, currentMonth));
  }, [currentMonth, currentYear]);

  useEffect(() => {
    setArrayOfSelectedDates(pushNewDatesToArray(startDate, endDate));
  }, [startDate, endDate]);

  return (
    <div className={styles["calendar-widget"]}>
      <div className={styles["calendar-widget__controls"]}>
        <div className={styles["calendar-widget__controls-content"]}>
          <div className={styles["calendar-widget__controls-text"]}>
            <BodyFour label={labels.months[currentMonth - 1]} color={manatee} />
            <BodyFour label={String(currentYear)} color={manatee} />
          </div>
        </div>

        <div className={styles["calendar-widget__controls-content"]}>
          <FiChevronLeft
            className={styles["calendar-widget__controls-arrow"]}
            onClick={handlePrevious}
          />

          <FiChevronRight
            className={styles["calendar-widget__controls-arrow"]}
            onClick={handleNext}
          />
        </div>
      </div>

      <Calendar
        daysOfCurrentMonth={daysOfCurrentMonth}
        setDaysOfCurrentMonth={setDaysOfCurrentMonth}
        arrayOfSelectedDates={arrayOfSelectedDates}
        startDate={startDate}
        endDate={endDate}
        handleDates={handleDates}
      />
    </div>
  );
};
