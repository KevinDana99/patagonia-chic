import React, { useCallback, useEffect, useState } from 'react';
import ReactCalendar from 'react-calendar';
import './styles.css';
// import 'react-calendar/dist/Calendar.css';
import { Container } from './styled';
import { PrimaryCalendarType } from './types';
import { IoChevronForward, IoChevronBack } from 'react-icons/io5';

const PrimaryCalendar = ({
	onDateSelected,
	range = false,
	disabledDates,
	doubleCalendar,
	defaultActiveStartDate = new Date(),
	onRangeSelected,
	onRangeStartDateSelected,
	onRangeEndDateSelected,
	shadow = false,
	highlightToday = false,
	locale = 'es',
	selectedRange = null,
}: PrimaryCalendarType) => {
	const [selectedDates, setSelectedDates] = useState(selectedRange);

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
		<Container highlightToday={highlightToday} range={range} shadow={shadow}>
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
				minDate={new Date()}
				selectRange={range}
			/>
		</Container>
	);
};

export default PrimaryCalendar;
