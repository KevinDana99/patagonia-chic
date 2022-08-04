import React, { useEffect, useState } from 'react';
import ReactCalendar from 'react-calendar';
import './styles.css';
import { Container } from './styled';
import { PrimaryCalendarType } from './types';
import Calendar from 'react-calendar';
const PrimaryCalendar = ({
	onDaySelected,
	range = false,
	disabledDates,
	doubleCalendar,
	defaultMonth,
	onRangeSelected,
	onRangeStartDateSelected,
	onRangeEndDateSelected,
}: PrimaryCalendarType) => {
	const setDefaultMonth = () => {
		const currentMonth = defaultMonth || new Date().getMonth();
		return new Date(2022, currentMonth, 1);
	};

	const [state, setState] = useState(
		defaultMonth ? setDefaultMonth() : new Date()
	);

	!range && !doubleCalendar && onDaySelected && onDaySelected(state);
	range && onRangeSelected && onRangeSelected(state);
	doubleCalendar && onRangeSelected && onRangeSelected(state);

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

	useEffect(() => {
		if (state.length) {
			onRangeStartDateSelected && onRangeStartDateSelected(state[0]);
			onRangeEndDateSelected && onRangeEndDateSelected(state[1]);
		}
	}, [state]);

	return (
		<Container
			range={range || doubleCalendar ? true : false}
			state={state}
			default={defaultMonth && setDefaultMonth()}
		>
			<ReactCalendar
				showDoubleView={doubleCalendar ? true : false}
				next2Label={null}
				prev2Label={null}
				locale={'es'}
				onChange={setState}
				value={state}
				selectRange={range || doubleCalendar ? true : false}
				tileDisabled={({ date }) => {
					return disabledPrevStartDate(date) || disabledReservedDates(date);
				}}
			/>
		</Container>
	);
};

export default PrimaryCalendar;
