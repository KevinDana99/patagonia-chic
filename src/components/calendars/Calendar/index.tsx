import React, { ButtonHTMLAttributes, useEffect, useState } from 'react';
import ReactCalendar from 'react-calendar';
import './styles.css';
import { Container } from './styled';
import { PrimaryCalendarType } from './types';
import { Node } from '@babel/core';

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
		return new Date(new Date().getFullYear(), currentMonth, 1);
	};

	const [state, setState] = useState<Date | [Date | null, Date | null] | null>(
		defaultMonth ? setDefaultMonth() : null
	);

	const [disableNav, setDisableNav] = useState({ back: true, next: false });

	const [date, setDate] = useState<Array<Date>>([]);

	const [disableRange, setDisableRange] = useState(true);

	const [views, setViews] = useState<[] | NodeList>([]);

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

	const disabledNavigationBackArrow = (currentDate: Date) => {
		const disable =
			currentDate.getMonth() == setDefaultMonth().getMonth() &&
			setDefaultMonth().getFullYear() == currentDate.getFullYear()
				? true
				: false;

		setDisableNav({ ...disableNav, back: disable });
	};

	const testDisableRange = (dayNumber: number, e: Element) => {
		if (date && Array.isArray(date) && date != null && date.length > 0) {
			if (dayNumber < date[0].getDate() && views[0].contains(e)) {
				setDisableRange(true);
			} else if (date[0] && !date[1]) {
				range && setDisableRange(false);
				doubleCalendar && setDisableRange(false);
			} else {
				setDisableRange(true);
			}
		}
	};

	const listenDayHover = () => {
		const days = document.querySelectorAll(
			'.react-calendar__tile.react-calendar__month-view__days__day'
		);

		const monthView = document.querySelectorAll('.react-calendar__month-view');

		setViews(monthView);

		days.forEach((e) => {
			e.addEventListener('mouseover', () =>
				testDisableRange(parseInt(e.children[0].innerHTML), e)
			);
		});
	};

	const handleOnDaySelected = () => {
		state && !range && !doubleCalendar && onDaySelected && onDaySelected(state);
	};

	const handleOnRangeSelected = () => {
		(state && range) ||
			(doubleCalendar && onRangeSelected && onRangeSelected(state));
	};

	const handleOnStartDateSelected = () => {
		onRangeStartDateSelected && onRangeStartDateSelected(state[0]);
	};

	const handleOnEndDateSelected = () => {
		onRangeEndDateSelected && onRangeEndDateSelected(state[1]);
	};

	useEffect(() => {
		listenDayHover();
	}, [date]);

	useEffect(() => {
		handleOnDaySelected();
		handleOnRangeSelected();

		if (state != null && Array.isArray(state)) {
			handleOnStartDateSelected();
			handleOnEndDateSelected();
		}
	}, [state]);

	const addDates = (value: Date, e: React.MouseEvent) => {
		date.length < 2 ? setDate([...date, value]) : setDate([value]);
	};
	return (
		<Container
			range={range || doubleCalendar ? true : false}
			disableRange={disableRange}
			disabledBackArrow={disableNav.back}
		>
			<ReactCalendar
				onClickDay={(value, event) => addDates(value, event)}
				onActiveStartDateChange={({ activeStartDate }) => {
					disabledNavigationBackArrow(activeStartDate);
				}}
				value={state}
				showDoubleView={doubleCalendar ? true : false}
				next2Label={null}
				prev2Label={null}
				showNeighboringMonth={false}
				locale={'es'}
				onChange={setState}
				selectRange={range || doubleCalendar ? true : false}
				tileDisabled={({ date }) => {
					return disabledPrevStartDate(date) || disabledReservedDates(date);
				}}
			/>
		</Container>
	);
};

export default PrimaryCalendar;
