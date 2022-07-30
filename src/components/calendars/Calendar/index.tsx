import React, { useState } from 'react';
import ReactCalendar from 'react-calendar';

import './styles.css';
import { PrimaryCalendarType } from './types';
const PrimaryCalendar = ({
	onDaySelected,
	range = false,
	disabledDates,
}: PrimaryCalendarType) => {
	const [state, setState] = useState(new Date());

	onDaySelected && onDaySelected(state);

	const disabledPrevStartDate = (date: Date) => {
		const currentDate = new Date(new Date().setDate(new Date().getDate() - 1));
		const startDate = date < currentDate ? true : false;
		return startDate;
	};
	const disabledReservedDates = (date: Date) => {
		const reservedDates = disabledDates.some(
			(disabledDate) =>
				date.getFullYear() === disabledDate.getFullYear() &&
				date.getMonth() === disabledDate.getMonth() &&
				date.getDate() === disabledDate.getDate()
		);
		return reservedDates;
	};
	return (
		<ReactCalendar
			next2Label={null}
			prev2Label={null}
			locale={'es'}
			onChange={setState}
			value={state}
			selectRange={range ? true : false}
			tileDisabled={({ date }) => {
				return disabledPrevStartDate(date) || disabledReservedDates(date);
			}}
		/>
	);
};

export default PrimaryCalendar;
