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
		<>
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
				<CalendarData label={'Lugar'} title={data.place?.name} />
				<CalendarData
					label={'Llegada'}
					title={data.startDate ? data.startDate.name : '-'}
				/>
				<CalendarData
					label={'Partida'}
					title={data.endDate ? data.endDate.name : '-'}
				/>
			</CalendarDataContainer>
			<PrimaryButton
				title={'Buscar Excursiones'}
				IconComponent={IoSearch}
				onClick={sendData}
			/>
		</>
	);
};

export default CalendarMobile;
