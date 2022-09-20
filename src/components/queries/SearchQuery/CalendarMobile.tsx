import React from 'react';
import { IoSearch } from 'react-icons/io5';
import PrimaryButton from '../../buttons/PrimaryButton';
import { Calendar } from './Calendar';
import ListModal from './ListModal';
import {
	CalendarContainer,
	CalendarDataContainer,
	CalendarDataItem,
	CalendarDataLabel,
	CalendarDataTitle,
} from './styled';
import { CalendarMobileType } from './types';

const CalendarMobile = ({
	closeList,
	setDates,
	data,
	setCalendarFocusedInput,
	calendarFocusedInput,
	isMobile,
	sendData,
	texts,
}: CalendarMobileType) => {
	const CalendarData = ({
		title,
		label,
	}: {
		title: string | undefined;
		label: string;
	}) => (
		<CalendarDataItem>
			<CalendarDataLabel>{label}</CalendarDataLabel>
			<CalendarDataTitle>{title}</CalendarDataTitle>
		</CalendarDataItem>
	);

	return (
		<ListModal closeModal={closeList}>
			<CalendarContainer onClick={(e) => e.stopPropagation()}>
				<Calendar
					setDates={setDates}
					values={data}
					setFocused={setCalendarFocusedInput}
					focused={calendarFocusedInput}
					isMobile={isMobile}
					closeCalendar={() => {
						setCalendarFocusedInput('startDate');
					}}
				/>
			</CalendarContainer>
			<CalendarDataContainer>
				<CalendarData
					label={texts.mobileCalendarInputDateLabel}
					title={data.place?.name}
				/>
				<CalendarData
					label={texts.mobileCalendarInputEndDateLabel}
					title={data.startDate ? data.startDate.name : '-'}
				/>
				<CalendarData
					label={texts.mobileCalendarInputStartDateLabel}
					title={data.endDate ? data.endDate.name : '-'}
				/>
			</CalendarDataContainer>
			<PrimaryButton
				title={texts.calendarInputButtonTitle}
				IconComponent={IoSearch}
				onClick={sendData}
			/>
		</ListModal>
	);
};

export default CalendarMobile;
