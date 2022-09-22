import React, { useRef } from 'react';
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import { Calendar } from './Calendar';
import CalendarMobile from './CalendarMobile';
import {
	CalendarContainer,
	CalendarDesktopContainer,
	CalendarInputContainer,
	CloseIcon,
	Divider,
	Label,
	OptionContainer,
	OptionContent,
	Title,
} from './styled';
import { CalendarInputType } from './types';

export const CalendarInput = ({
	labels,
	titles,
	onClick,
	values,
	clearData,
	outsideClick,
	calendarFocusedInput,
	showCalendar,
	isMobile,
	closeList,
	setDates,
	data,
	setFocused,
	closeCalendar,
	sendData,
}: CalendarInputType) => {
	const calendarRef = useRef(null);
	useOutsideClick(calendarRef, outsideClick);

	return (
		<CalendarInputContainer ref={calendarRef}>
			{showCalendar && isMobile && (
				<CalendarMobile
					closeList={closeList}
					setDates={setDates}
					data={data}
					setCalendarFocusedInput={setFocused}
					isMobile={isMobile}
					calendarFocusedInput={calendarFocusedInput}
					sendData={sendData}
					texts={texts}
				/>
			)}
			<CalendarDesktopContainer>
				<Divider />
				<OptionContainer
					onClick={onClick}
					isSelected={calendarFocusedInput === 'startDate' && showCalendar}
				>
					<OptionContent>
						<Label>{labels[0]}</Label>
						<Title>{values?.startDate?.name ?? titles[0]}</Title>
					</OptionContent>
					{values?.startDate?.name && <CloseIcon onClick={clearData} />}
				</OptionContainer>
				<Divider />
				<OptionContainer
					onClick={onClick}
					isSelected={calendarFocusedInput === 'endDate' && showCalendar}
				>
					<OptionContent>
						<Label>{labels[1]}</Label>
						<Title>{values?.endDate?.name ?? titles[1]}</Title>
					</OptionContent>
					{values?.endDate?.name && <CloseIcon onClick={clearData} />}
				</OptionContainer>
				<Divider />
			</CalendarDesktopContainer>
			{showCalendar && (
				<CalendarContainer onClick={(e) => e.stopPropagation()}>
					<Calendar
						setDates={setDates}
						values={data}
						setFocused={setFocused}
						focused={calendarFocusedInput}
						closeCalendar={closeCalendar}
						isMobile={false}
					/>
				</CalendarContainer>
			)}
		</CalendarInputContainer>
	);
};
