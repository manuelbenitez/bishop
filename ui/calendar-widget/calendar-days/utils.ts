import dayjs from 'dayjs';
import { IDayOfCurrentMonth } from '../types/types';
import isBetween from 'dayjs/plugin/isBetween';
dayjs.extend(isBetween);

/**
 * Calculates the number of days in the current month
 *
 * @param {number} year - current year displayed in the calendar
 * @param {number} month - current month displayed in the calendar
 * @returns {number}
 */
export function getNumberOfDaysInMonth(year: number, month: number): number {
    return dayjs(`${year}-${month}-01`).daysInMonth();
}

/**
 * Creates an array with the days of the current month
 * @param {number} year - current year displayed in the calendar
 * @param {number} month - current month displayed in the calendar
 * @returns {daysOfCurrentMonth[]}
 */

export function createDaysOfCurrentMonth(year: number, month: number): Array<IDayOfCurrentMonth> {
    const daysOfCurrentMonth = [...Array(getNumberOfDaysInMonth(year, month))]
        .fill(0)
        .map((_, index) => {
            const dayOfCurrentMonth: IDayOfCurrentMonth = {
                date: dayjs(`${year}-${month}-${index + 1}`).format('YYYY-MM-DD'),
                dayOfMonth: index + 1,
                isFirst: false,
                isLast: false,
                event: undefined,
            };
            return dayOfCurrentMonth;
        });
    return daysOfCurrentMonth;
}

/**
 * Returns a number indicating the day of the week in which a month starts
 * @param {string} date - first day of the current month (YYYY-MM-DD)
 * @returns {number}
 */
export function getWeekday(date: string): number {
    return dayjs(date).day();
}
/**
 * Creates an array that will be used to push the start day of a month to the right weekday
 * @param {number} firstDayOfTheMonthWeekday - number indicating the day of the week that the months starts
 * @returns {number[]}
 */
export function createDaysOfPreviousMonth(firstDayOfTheMonthWeekday: number): Array<number> {
    if (firstDayOfTheMonthWeekday !== 0) {
        return new Array(firstDayOfTheMonthWeekday - 1).fill(undefined);
    } else {
        return new Array(0);
    }
}
/**
 * Calculates the next day of a certain date
 * @param {string} startDate - when selecting a date range, this is the first date that a user clicks on
 * @returns {string}
 */
export function getNextDay(startDate: string | undefined): string | undefined {
    const currentDateArray = startDate?.split('-');
    if (currentDateArray !== undefined) {
        const year = currentDateArray[0];
        const month = currentDateArray[1];
        const day = currentDateArray[2];
        return dayjs(`${year}-${month}-${Number(day) + 1}`).format('YYYY-MM-DD');
    }
    return undefined;
}
/**
 * Returns the range of dates in between startDate and endDate
 * @param {string} startDate - when selecting a date range, this is the first date that a user clicks on
 * @param {string} endDate - when selecting a date range, this is the second date that a user clicks on
 * @returns {string[]}
 */
export function pushNewDatesToArray(
    startDate: string | undefined,
    endDate: string | undefined
): Array<string | undefined> {
    const array: string[] = [];
    let check = true;

    /**
     * Compares if betweenDate is in between startDate and endDate and pushes it into an array of dates
     * @param {string} startDate - when selecting a date range, this is the first date that a user clicks on
     * @param {string} endDate - when selecting a date range, this is the second date that a user clicks on
     * @param {string} betweenDate - value returned from function getNextDay()
     */
    function compareDates(
        startDate: string | undefined,
        endDate: string | undefined,
        betweenDate: string | undefined
    ) {
        if (startDate !== undefined && endDate !== undefined && betweenDate !== undefined) {
            const dateIsBetween = dayjs(betweenDate).isBetween(dayjs(startDate), dayjs(endDate));
            if (dateIsBetween) {
                array.push(betweenDate);
                compareDates(getNextDay(startDate), endDate, getNextDay(betweenDate));
            } else {
                array.push(endDate);
                check = false;
            }
        }
    }

    if (startDate !== undefined && endDate !== undefined) {
        array.push(startDate);
        for (let i = 0; check === true; i++) {
            compareDates(startDate, endDate, getNextDay(startDate));
        }
    }
    return [...array];
}
/**
 * Sets the day to be the first of the selected dates
 *
 * @param {IDayOfCurrentMonth} dayOfCurrentMonth  - day clicked
 */
export function isFirst(dayOfCurrentMonth: IDayOfCurrentMonth) {
    dayOfCurrentMonth.isFirst = true;
}
/**
 * Sets the day to be the last of the selected dates
 *
 * @param {IDayOfCurrentMonth} dayOfCurrentMonth  - day clicked
 */
export function isLast(dayOfCurrentMonth: IDayOfCurrentMonth) {
    dayOfCurrentMonth.isLast = true;
}
/**
 * Cancels the first day of the selected dates
 *
 * @param {IDayOfCurrentMonth} dayOfCurrentMonth  - day clicked
 */
export function cancelFirst(dayOfCurrentMonth: IDayOfCurrentMonth) {
    dayOfCurrentMonth.isFirst = false;
}
/**
 * Cancels the last day of the selected dates
 *
 * @param {IDayOfCurrentMonth} dayOfCurrentMonth  - day clicked
 */
export function cancelLast(dayOfCurrentMonth: IDayOfCurrentMonth) {
    dayOfCurrentMonth.isLast = false;
}
/**
 * Cancel all properties of the selected dates
 *
 * @param {IDayOfCurrentMonth} dayOfCurrentMonth  - day clicked
 */
export function cancelAll(dayOfCurrentMonth: IDayOfCurrentMonth) {
    dayOfCurrentMonth.isFirst = false;
    dayOfCurrentMonth.isLast = false;
}

/**
 * Loads events into the rendered days of the current month
 *
 * @param {any} event
 * @param {IDayOfCurrentMonth} dayOfCurrentMonth
 */
export function loadEvent(event: any, dayOfCurrentMonth: IDayOfCurrentMonth) {
    dayOfCurrentMonth.event = event;
}
