import React, { useCallback, useEffect, useState } from 'react';
import ReactCalendar, { CalendarTileProperties } from 'react-calendar';
import './styles.css';
// import 'react-calendar/dist/Calendar.css';
import { AvailabilityReferenceContainer, Container } from './styled';
import { PrimaryCalendarType, isDateAvailableType } from './types';
import { IoChevronForward, IoChevronBack } from 'react-icons/io5';
import DateAvailability, {
	AvailabilityReference,
} from './components/DateAvailability';

const PrimaryCalendar = ({
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
}: PrimaryCalendarType) => {
	const [selectedDates, setSelectedDates] = useState(selectedRange);

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
			} else {
				const currSelectedRange = [selectedDates[0], date] as [Date, Date];

				if (currSelectedRange[0] > currSelectedRange[1])
					currSelectedRange.reverse();

				setSelectedDates(currSelectedRange);
				onRangeSelected?.(currSelectedRange);
				onRangeEndDateSelected?.(date);
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
				onChange={handleOnChange}
				minDate={minDate}
				maxDate={maxDate}
				selectRange={range}
				tileContent={availableDates ? TileElement : undefined}
				tileDisabled={({ date }) =>
					!isDateAvailable(date, availableDates, true)
				}
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

export default PrimaryCalendar;
