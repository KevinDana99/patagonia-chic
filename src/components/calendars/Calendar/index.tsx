import React, { useEffect, useState } from 'react';
import ReactCalendar from 'react-calendar';
import './styles.css';
import { Container } from './styled';
import { PrimaryCalendarType } from './types';

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

	const [state, setState] = useState(defaultMonth ? setDefaultMonth() : null);

	const [nav, setNav] = useState({ back: true, next: false });

	const [disableRange, setDisableRange] = useState(false);

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
			currentDate.getMonth() == setDefaultMonth().getMonth() ? true : false;

		setNav({ ...nav, back: disable });
	};

	const testDisableRange = (dayNumber: number) => {
		state && state != null && state.getDate() > dayNumber
			? setDisableRange(true)
			: setDisableRange(false);
		console.log(state.getDate());
	};

	const listenDayHover = () => {
		const days = document.querySelectorAll(
			'.react-calendar__tile.react-calendar__month-view__days__day'
		);
		days.forEach((e) => {
			e.addEventListener('mouseover', () =>
				testDisableRange(parseInt(e.children[0].innerHTML))
			);
		});
	};

	const handleOnDaySelected = () => {
		state && !range && !doubleCalendar && onDaySelected && onDaySelected(state);
	};

	const handleOnRangeSelected = () => {
		range || (doubleCalendar && onRangeSelected && onRangeSelected(state));
	};

	const handleOnStartDateSelected = () => {
		onRangeStartDateSelected && onRangeStartDateSelected(state[0]);
	};

	const handleOnEndDateSelected = () => {
		onRangeEndDateSelected && onRangeEndDateSelected(state[1]);
	};

	useEffect(() => {
		handleOnDaySelected();
		handleOnRangeSelected();

		if (state != null && state.length) {
			handleOnStartDateSelected();
			handleOnEndDateSelected();
		}
		listenDayHover();
	}, [state]);

	return (
		<Container
			range={range || doubleCalendar ? true : false}
			disableRange={disableRange}
			disabledBackArrow={nav.back}
		>
			<ReactCalendar
				onActiveStartDateChange={({ activeStartDate }) =>
					disabledNavigationBackArrow(activeStartDate)
				}
				showDoubleView={doubleCalendar ? true : false}
				next2Label={null}
				prev2Label={null}
				showNeighboringMonth={false}
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
