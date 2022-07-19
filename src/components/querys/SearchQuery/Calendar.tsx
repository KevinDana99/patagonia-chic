import React, { useState } from 'react';
import { CalendarButtonBack, CalendarButtonNext } from './styled';
import { DayPickerRangeController } from 'react-dates';
import 'react-dates/initialize';
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
	dispositive,
}: CalendarType) => {
	const [calendarPreviousButton, setCalendarPreviousButton] = useState(false);

	const currentDate = moment();

	return (
		<DayPickerRangeController
			startDate={values?.startDate?.date}
			initial
			endDate={values?.endDate?.date}
			onDatesChange={({ startDate, endDate }: StateSearchQueryType) => {
				console.log(moment(startDate).format('MMMM,D'));
				setDates &&
					setDates({
						...values,
						startDate: {
							name: moment(startDate).format('MMMM, D'),
							date: startDate,
						},
						endDate: {
							name: moment(endDate).format('MMMM, D'),
							date: endDate,
						},
					});
				focused === 'endDate' && closeCalendar && closeCalendar();
			}}
			onFocusChange={(focusedInput: React.SetStateAction<string>) =>
				setFocused && setFocused(focusedInput)
			}
			focusedInput={focused}
			numberOfMonths={dispositive == 'DESKTOP' ? 2 : 1}
			isOutsideRange={(dateRange: moment.MomentInput) =>
				!currentDate.isSameOrAfter(dateRange) ||
				moment(dateRange).format('MM/DD/YYYY') === moment().format('MM/DD/YYYY')
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
	);
};
