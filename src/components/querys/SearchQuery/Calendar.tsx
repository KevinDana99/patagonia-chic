/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck

//TO DO: SET TYPEOF OF CALENDAR

import React, { useState, useEffect } from 'react';
import { CalendarButtonBack, CalendarButtonNext } from './styled';
import 'react-dates/initialize';
import { DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import { CalendarType, StateSearchQueryType } from './types';
moment.locale('es');

export const Calendar = ({
	setDates,
	values,
	setFocused,
	focused,
	closeCalendar,
	isMobile,
}: CalendarType) => {
	const [calendarPreviousButton, setCalendarPreviousButton] = useState(false);

	useEffect(() => {
		focused === null && setFocused('startDate');
	}, [focused, setFocused]);

	const currentDate = moment();
	return (
		<>
			<DayPickerRangeController
				startDate={values?.startDate?.date}
				endDate={values?.endDate?.date}
				onDatesChange={({ startDate, endDate }: StateSearchQueryType) => {
					setDates &&
						setDates({
							...values,
							startDate: {
								name: moment(startDate).format('MMMM, D'),
								date: startDate,
							},
							endDate: {
								name: endDate && moment(endDate).format('MMMM, D'),
								date: endDate,
							},
						});
					focused === 'endDate' && closeCalendar && closeCalendar();
				}}
				onFocusChange={(focusedInput: React.SetStateAction<string>) => {
					setFocused && setFocused(focusedInput);
				}}
				focusedInput={focused}
				numberOfMonths={!isMobile ? 2 : 1}
				isOutsideRange={(dateRange: moment.MomentInput) =>
					!currentDate.isSameOrAfter(dateRange) ||
					moment(dateRange).format('MM/DD/YYYY') ===
						moment().format('MM/DD/YYYY')
						? false
						: true
				}
				navPrev={calendarPreviousButton ? <CalendarButtonBack /> : <div />}
				navNext={<CalendarButtonNext />}
				onNextMonthClick={(month: moment.MomentInput) => {
					setCalendarPreviousButton(currentDate.isBefore(month, 'month'));
				}}
				onPrevMonthClick={(month: moment.MomentInput) => {
					setCalendarPreviousButton(currentDate.isBefore(month, 'month'));
				}}
				transitionDuration={0}
				hideKeyboardShortcutsPanel={false}
			/>
		</>
	);
};
