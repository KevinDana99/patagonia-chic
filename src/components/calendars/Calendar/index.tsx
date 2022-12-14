import React, { useEffect, useRef, useState } from 'react';
import ReactCalendar, { CalendarTileProperties } from 'react-calendar';
import './styles.css';
import { AvailabilityReferenceContainer, Container } from './styled';
import { CalendarPropsType } from './types';
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
import { useCalendarWidth } from './hooks/useCalendarWidth';
import moment from 'moment';

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
	highlightToday = false,
	locale = 'es',
	texts,
	width: containerWidthProp = 300,
	value = null,
	defaultValue,
	doubleCalendarSpaceBetween = 20,
}: CalendarPropsType) => {
	moment.locale(locale);
	const [selectedDates, setSelectedDates] = useState(value);
	const [prevAndNextUnavailableDate, setPrevAndNextUnavailableDate] = useState<
		[Date, Date] | null
	>(null);

	useEffect(() => {
		setSelectedDates(value);
	}, [value]);

	const calendarRef = useRef<HTMLDivElement>(null);

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

	const { calendarWidth, containerWidth, tileHeight } = useCalendarWidth(
		containerWidthProp,
		calendarRef,
		doubleCalendarSpaceBetween,
		doubleCalendar
	);

	const TileElement = ({ date }: CalendarTileProperties) => {
		return (
			<DateAvailability isAvailable={isDateAvailable(date, availableDates)} />
		);
	};

	return (
		<Container
			ref={calendarRef}
			width={containerWidth}
			tileHeight={tileHeight}
			calendarWidth={calendarWidth}
			doubleCalendarSpaceBetween={doubleCalendarSpaceBetween}
			highlightToday={highlightToday}
			range={range}
		>
			{!!calendarRef.current && (
				<ReactCalendar
					navigationLabel={({ label }) => replaceMonthText(label)}
					formatShortWeekday={(_, date) => moment(date).format('dd')}
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
					value={
						selectedDates?.[1] ? selectedDates : selectedDates?.[0] ?? null
					}
					defaultValue={defaultValue}
					allowPartialRange
					returnValue="start"
				/>
			)}
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
