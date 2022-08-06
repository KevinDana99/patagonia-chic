import React, { ButtonHTMLAttributes, useEffect, useState } from 'react';
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

	const [date, setDate] = useState<Array<Date>>([]);

	const [disableRange, setDisableRange] = useState(true);

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
		if (date && Array.isArray(date) && date != null && date.length > 0) {
			if (dayNumber < date[0].getDate()) {
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
		if (value < date[0]) {
			alert('menor');
		} else {
			alert('mayor');
		}

		date.length < 2 ? setDate([...date, value]) : setDate([value]);
	};
	return (
		<Container
			range={range || doubleCalendar ? true : false}
			disableRange={disableRange}
			disabledBackArrow={nav.back}
		>
			<ReactCalendar
				onClickDay={(value, event) => addDates(value, event)}
				onActiveStartDateChange={({ activeStartDate }) =>
					disabledNavigationBackArrow(activeStartDate)
				}
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
