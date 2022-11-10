import React, { useState } from 'react';
import ReactCalendar, { CalendarTileProperties } from 'react-calendar';
import './styles.css';
import { AvailabilityReferenceContainer, Container } from './styled';
import { CalendarType } from './types';
import { IoChevronForward, IoChevronBack } from 'react-icons/io5';
import DateAvailability, {
	AvailabilityReference,
} from './components/DateAvailability';
import {
	getMinDateOfArray,
	isDateAvailable,
	replaceMonthText,
} from '../../../utils/dates';
import { useComponentLogic } from './hooks/useComponentLogic';

const Calendar = ({
	onDateSelected,
	range = false,
	availableDates,
	minDate = new Date(),
	maxDate,
	doubleCalendar,
	defaultActiveStartDate,
	onRangeSelected,
	onRangeStartDateSelected,
	onRangeEndDateSelected,
	shadow = false,
	highlightToday = false,
	locale = 'es',
	selectedRange = null,
	texts,
	calendarWidth = 400,
	value,
	defaultValue,
	returnValue = 'start',
}: CalendarType) => {
	const [selectedDates, setSelectedDates] = useState(selectedRange);
	const [prevAndNextUnavailableDate, setPrevAndNextUnavailableDate] = useState<
		[Date, Date] | null
	>(null);

	const { handleOnChange } = useComponentLogic({
		range,
		availableDates,
		onDateSelected,
		onRangeSelected,
		onRangeStartDateSelected,
		onRangeEndDateSelected,
		selectedDates,
		setSelectedDates,
		setPrevAndNextUnavailableDate,
	});

	const TileElement = ({ date }: CalendarTileProperties) => {
		return (
			<DateAvailability isAvailable={isDateAvailable(date, availableDates)} />
		);
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
				defaultActiveStartDate={
					defaultActiveStartDate || getMinDateOfArray(availableDates)
				}
				showDoubleView={doubleCalendar}
				nextLabel={<IoChevronForward size={15} />}
				prevLabel={<IoChevronBack size={15} />}
				next2Label={null}
				prev2Label={null}
				showNeighboringMonth={false}
				locale={locale}
				onClickDay={handleOnChange}
				minDate={minDate}
				maxDate={maxDate}
				selectRange={range}
				tileContent={availableDates ? TileElement : undefined}
				tileDisabled={({ date }) =>
					!isDateAvailable(
						date,
						availableDates,
						prevAndNextUnavailableDate,
						true
					)
				}
				value={value}
				defaultValue={defaultValue}
				returnValue={returnValue}
			/>
			{availableDates && (
				<AvailabilityReferenceContainer>
					<div style={{ display: 'flex', flex: '1' }}>
						<AvailabilityReference text={texts?.availableReference} />
					</div>
					{doubleCalendar && <div style={{ display: 'flex', flex: '1' }} />}
				</AvailabilityReferenceContainer>
			)}
		</Container>
	);
};

export default Calendar;
