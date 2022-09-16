import { Dispatch, SetStateAction } from "react";

export interface IDayOfCurrentMonth {
  date: string;
  dayOfMonth: number;
  isFirst: boolean;
  isLast: boolean;
}
export interface IRegularDateProps
  extends React.HTMLAttributes<HTMLDivElement> {
  dayOfCurrentMonth: IDayOfCurrentMonth;
}
export type IHighlightedDateProps = IRegularDateProps;

export interface ICalendarDaysProps {
  daysOfCurrentMonth: IDayOfCurrentMonth[];
  arrayOfSelectedDates: Array<string | undefined> | undefined;
  setDaysOfCurrentMonth: Dispatch<SetStateAction<IDayOfCurrentMonth[]>>;
  handleDates: (dateClicked: string) => void;
  startDate: string | undefined;
  endDate: string | undefined;
}

export interface ICalendarLabels {
  months: string[];
  weekdays: string[];
}
export interface ICalendarWeekdaysProps {
  weekdays: string[];
}
export interface ICalendarWidgetProps {
  labels: ICalendarLabels;
}
