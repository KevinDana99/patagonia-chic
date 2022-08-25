import React from 'react';

import { Calendar } from '../../../inputs/CalendarInput/Calendar';

import {
	CalendarContainer,
	CalendarDataContainer,
	CalendarDataItem,
	CalendarDataLabel,
	CalendarDataTitle,
	ButtonSearch,
	SearchIcon,
} from './styled';
import { CalendarMobileType } from '../../../types';

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
					closeCalendar={closeList}
					isMobile={isMobile}
				/>
			</CalendarContainer>
			<CalendarDataContainer>
				<CalendarData
					label={'Lugar'}
					title={data.place?.name ? data.place.name : '-'}
				/>
				<CalendarData
					label={'Llegada'}
					title={data.startDate ? data.startDate.name : '-'}
				/>
				<CalendarData
					label={'Partida'}
					title={data.endDate ? data.endDate.name : '-'}
				/>
			</CalendarDataContainer>
			<ButtonSearch
				title={'Buscar Excursiones'}
				IconComponent={SearchIcon}
				onClick={sendData}
			/>
		</>
	);
};

export default CalendarMobile;
