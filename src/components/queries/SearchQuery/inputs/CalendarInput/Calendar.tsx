/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck

import React from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import PrimaryCalendar from '../../../../calendars/Calendar';
moment.locale('es');

export const Calendar = ({
	setDates,
	values,
	closeCalendar,
	isMobile,
}: CalendarType) => {
	const setStartDate = (startDate) => {
		setDates({
			...values,
			startDate: {
				name: moment(startDate).format('MMMM, D'),
				date: startDate,
			},
		});
	};

	const setEndDate = (endDate) => {
		setDates({
			...values,
			endDate: {
				name: moment(endDate).format('MMMM, D'),
				date: endDate,
			},
		});
	};

	return (
		<>
			<PrimaryCalendar
				selectedRange={[values?.startDate?.date, values?.endDate?.date]}
				range={isMobile ? true : false}
				disabledDates={[new Date()]}
				doubleCalendar={isMobile ? false : true}
				onRangeStartDateSelected={(e) => {
					e != undefined && setStartDate(e);
				}}
				onRangeEndDateSelected={(e) => {
					e != undefined && setEndDate(e);
					e != undefined && closeCalendar();
				}}
			/>
		</>
	);
};
