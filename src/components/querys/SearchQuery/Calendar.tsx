import React, { useState } from 'react';
import { CalendarButtonBack, CalendarButtonNext } from './styled';
import { DayPickerRangeController } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
moment.locale('es');

export const Calendar = ({
	setDates,
	values,
	setFocused,
	focused,
	closeCalendar,
}) => {
	const [calendarPreviousButton, setCalendarPreviousButton] = useState(false);

	const { startDate, endDate } = values;

	const currentDate = moment();
	return (
		<DayPickerRangeController
			startDate={startDate?.date}
			initial
			endDate={endDate?.date}
			onDatesChange={({ startDate, endDate }: any) => {
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
				focused === 'endDate' && closeCalendar();
			}}
			onFocusChange={(focusedInput: React.SetStateAction<undefined>) =>
				setFocused(focusedInput)
			}
			focusedInput={focused}
			numberOfMonths={2}
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
