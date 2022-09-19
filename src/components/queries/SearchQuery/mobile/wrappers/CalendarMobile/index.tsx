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
import Text from '../../../../../texts/Text';

const CalendarMobile = ({
	closeList,
	setDates,
	data,
	setCalendarFocusedInput,
	calendarFocusedInput,
	isMobile,
	sendData,
	labelEndDate,
	labelPlace,
	labelStartDate,
	placeholderDate,
	placeholderPlace,
	titleSearchButton,
}: CalendarMobileType) => {
	const CalendarData = ({
		title,
		label,
	}: {
		title: string | undefined;
		label: string;
	}) => (
		<CalendarDataItem>
			<CalendarDataLabel>
				<Text size={13} weight={'regular'} color={'#666'}>
					{label}
				</Text>
			</CalendarDataLabel>
			<CalendarDataTitle>
				<Text size={14} weight={'medium'} color={'#222'}>
					{title}
				</Text>
			</CalendarDataTitle>
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
					label={labelPlace}
					title={data.place?.name ? data.place.name : '-'}
				/>
				<CalendarData
					label={labelStartDate}
					title={data.startDate ? data.startDate.name : '-'}
				/>
				<CalendarData
					label={labelEndDate}
					title={data.endDate ? data.endDate.name : '-'}
				/>
			</CalendarDataContainer>
			<ButtonSearch
				title={titleSearchButton}
				IconComponent={SearchIcon}
				onClick={sendData}
			/>
		</>
	);
};

export default CalendarMobile;
