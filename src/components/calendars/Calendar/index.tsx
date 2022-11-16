import React, { useCallback, useEffect, useState } from 'react';
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
	shadow = false,
	markCurrentDay = false,
	locale = 'es',
	selectedRange,
}: PrimaryCalendarType) => {
	const setDefaultMonth = () => {
		const currentMonth = defaultMonth || new Date().getMonth();
		return new Date(new Date().getFullYear(), currentMonth, 1);
	};

	const [selectedDates, setSelectedDates] = useState<
		Date | [Date | null, Date | null] | null
	>(selectedRange);

	const [disableNav, setDisableNav] = useState({ back: true, next: false });

	const [date, setDate] = useState<Array<Date> | []>([]); //Los 2 dates

	const [disableRange, setDisableRange] = useState(true);

	const [monthViews, setMonthViews] = useState<[] | NodeList>([]);

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

	const testDisableRange = useCallback(
		(dayNumber: number, dayElement: Element) => {
			if (date && date.length > 0) {
				if (
					dayNumber < date[0].getDate() &&
					monthViews[0].contains(dayElement)
				) {
					setDisableRange(true);
				} else if (date[0] && !date[1]) {
					range && setDisableRange(false);
					doubleCalendar && setDisableRange(false);
				} else {
					setDisableRange(true);
				}
			}
		},
		[date, doubleCalendar, monthViews, range]
	);

	const replaceMonthText = (month: string) => {
		const substrMonth = month.split(' ');
		if (substrMonth.length < 3) {
			return month;
		} else {
			return substrMonth[0] + ' ' + substrMonth[2];
		}
	};

	const handleOnDaySelected = useCallback(() => {
		selectedDates &&
			!range &&
			!doubleCalendar &&
			onDaySelected &&
			onDaySelected(selectedDates);
	}, [doubleCalendar, onDaySelected, range, selectedDates]);

	const handleOnRangeSelected = useCallback(() => {
		onRangeSelected && onRangeSelected(selectedDates);
	}, [onRangeSelected, selectedDates]);

	const handleOnStartDateSelected = useCallback(() => {
		onRangeStartDateSelected && onRangeStartDateSelected(date[0]);
	}, [date, onRangeStartDateSelected]);

	const handleOnEndDateSelected = useCallback(() => {
		onRangeEndDateSelected &&
			onRangeEndDateSelected(date[1] < date[0] ? null : date[1]);
	}, [date, onRangeEndDateSelected]);

	const listenDayHover = useCallback(() => {
		const days = document.querySelectorAll(
			'.react-calendar__tile.react-calendar__month-view__days__day'
		);

		const monthView = document.querySelectorAll('.react-calendar__month-view');

		setMonthViews(monthView);

		days.forEach((e) => {
			e.addEventListener('mouseover', () =>
				testDisableRange(parseInt(e.children[0].innerHTML), e)
			);
		});
	}, [testDisableRange]);

	useEffect(() => {
		if (doubleCalendar || range) {
			handleOnStartDateSelected();
			handleOnEndDateSelected();
			listenDayHover();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [date, doubleCalendar, range]);

	useEffect(() => {
		if (doubleCalendar || range) {
			handleOnRangeSelected();
		} else {
			handleOnDaySelected();
		}
	}, [
		doubleCalendar,
		handleOnDaySelected,
		handleOnRangeSelected,
		range,
		selectedDates,
	]);

	const addDates = (currentSelectedDate: Date) => {
		date.length < 2
			? setDate((prevSelectedDate) => [
					...prevSelectedDate,
					currentSelectedDate,
			  ]) //Tengo las 2 fechas
			: setDate([currentSelectedDate]);
	};

	const resetRange = () => {
		setSelectedDates(null);
	};

	return (
		<Container
			markCurrentDay={markCurrentDay}
			range={range || doubleCalendar ? true : false}
			disableRange={disableRange}
			disabledBackArrow={disableNav.back}
			shadow={shadow}
		>
			<ReactCalendar
				navigationLabel={({ label }) => replaceMonthText(label)}
				defaultActiveStartDate={defaultMonth ? setDefaultMonth() : undefined}
				onClickDay={(value) => addDates(value)}
				onActiveStartDateChange={({ activeStartDate }) => {
					disabledNavigationBackArrow(activeStartDate);
				}}
				value={selectedDates}
				showDoubleView={doubleCalendar ? true : false}
				next2Label={null}
				prev2Label={null}
				showNeighboringMonth={false}
				locale={locale}
				onChange={
					(range || doubleCalendar) && disableRange
						? resetRange
						: setSelectedDates
				}
				selectRange={range || doubleCalendar ? true : false}
				tileDisabled={({ date }) => {
					return disabledPrevStartDate(date) || disabledReservedDates(date);
				}}
			/>
		</Container>
	);
};

export default PrimaryCalendar;
