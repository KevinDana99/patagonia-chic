import React, { useState } from 'react';
import ReactCalendar, { CalendarTileProperties } from 'react-calendar';
import './styles.css';
// import 'react-calendar/dist/Calendar.css';
import { AvailabilityReferenceContainer, Container } from './styled';
import {
	CalendarType,
	isDateAvailableType,
	getPrevAndNextUnavailableDatesType,
} from './types';
import { IoChevronForward, IoChevronBack } from 'react-icons/io5';
import DateAvailability, {
	AvailabilityReference,
} from './components/DateAvailability';

const Calendar = ({
	onDateSelected,
	range = false,
	availableDates,
	minDate = new Date(),
	maxDate,
	doubleCalendar,
	defaultActiveStartDate = new Date(),
	onRangeSelected,
	onRangeStartDateSelected,
	onRangeEndDateSelected,
	shadow = false,
	highlightToday = false,
	locale = 'es',
	selectedRange = null,
	texts,
	calendarWidth = 400,
}: CalendarType) => {
	const [selectedDates, setSelectedDates] = useState(selectedRange);
	const [prevAndNextUnavailableDate, setPrevAndNextUnavailableDate] = useState<
		Date[] | null
	>(null);

	const getPrevAndNextUnavailableDates: getPrevAndNextUnavailableDatesType = (
		currentDate,
		availableDates
	) => {
		if (!currentDate) return null;

		currentDate = new Date(
			Date.UTC(
				currentDate.getFullYear(),
				currentDate.getMonth(),
				currentDate.getDate(),
				0,
				0,
				0
			)
		);

		const nextUnavailableDate = new Date(currentDate);
		const prevUnavailableDate = new Date(currentDate);
		while (
			!!availableDates?.find(
				(item) => item.getTime() === nextUnavailableDate.getTime()
			)
		) {
			nextUnavailableDate.setDate(nextUnavailableDate.getDate() + 1);
		}
		console.log('nextUnavailableDate', nextUnavailableDate);
		while (
			!!availableDates?.find(
				(item) => item.getTime() === prevUnavailableDate.getTime()
			)
		) {
			prevUnavailableDate.setDate(prevUnavailableDate.getDate() - 1);
		}

		return [prevUnavailableDate, nextUnavailableDate];
	};

	const isDateAvailable: isDateAvailableType = (
		date,
		availableDatesList,
		defaultValue = false
	) => {
		date = new Date(
			Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0)
		);
		const isAvailable = availableDatesList
			? !!availableDatesList.find((item) => item.getTime() === date.getTime())
			: defaultValue;

		if (prevAndNextUnavailableDate) {
			// console.log('prevAndNextUnavailableDate', prevAndNextUnavailableDate);
			return (
				date.getTime() > prevAndNextUnavailableDate[0].getTime() &&
				date.getTime() < prevAndNextUnavailableDate[1].getTime()
			);
		}

		return isAvailable;
	};

	const TileElement = ({ date }: CalendarTileProperties) => {
		return (
			<DateAvailability isAvailable={isDateAvailable(date, availableDates)} />
		);
	};
	const handleOnChange = (date: Date) => {
		if (range) {
			if (selectedDates === null || selectedDates[1] !== null) {
				setSelectedDates([date, null]);
				onRangeStartDateSelected?.(date);

				if (availableDates) {
					setPrevAndNextUnavailableDate(
						getPrevAndNextUnavailableDates(date, availableDates)
					);
				}
			} else {
				const currSelectedRange = [selectedDates[0], date] as [Date, Date];

				if (currSelectedRange[0] > currSelectedRange[1])
					currSelectedRange.reverse();

				setSelectedDates(currSelectedRange);
				onRangeSelected?.(currSelectedRange);
				onRangeEndDateSelected?.(date);

				if (availableDates) {
					setPrevAndNextUnavailableDate(null);
				}
			}
		} else {
			setSelectedDates([date, null]);
		}
		onDateSelected?.(date);
	};

	const replaceMonthText = (month: string) => {
		const substrMonth = month.split(' ');
		if (substrMonth.length < 3) {
			return month;
		} else {
			return substrMonth[0] + ' ' + substrMonth[2];
		}
	};

	return (
		<Container
			calendarWidth={calendarWidth}
			highlightToday={highlightToday}
			range={range}
			shadow={shadow}
		>
			<ReactCalendar
				navigationLabel={({ label }) => replaceMonthText(label)}
				defaultActiveStartDate={defaultActiveStartDate}
				showDoubleView={doubleCalendar}
				nextLabel={<IoChevronForward size={15} />}
				prevLabel={<IoChevronBack size={15} />}
				next2Label={null}
				prev2Label={null}
				showNeighboringMonth={false}
				locale={locale}
				onClickDay={handleOnChange}
				// onChange={handleOnChange}
				minDate={minDate}
				maxDate={maxDate}
				selectRange={range}
				tileContent={availableDates ? TileElement : undefined}
				tileDisabled={({ date }) =>
					!isDateAvailable(date, availableDates, true)
				}
				returnValue="start"
			/>
			{availableDates && (
				<AvailabilityReferenceContainer>
					<div style={{ display: 'flex', flex: '1' }}>
						<AvailabilityReference text={texts.availableReference} />
					</div>
					{doubleCalendar && <div style={{ display: 'flex', flex: '1' }} />}
				</AvailabilityReferenceContainer>
			)}
		</Container>
	);
};

export default Calendar;
