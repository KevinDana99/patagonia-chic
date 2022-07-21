import React, { useRef } from 'react';
import { useOutsideClick } from '../useOutsideClick';
import {
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
	children,
	outsideClick,
	calendarFocusedInput,
	showCalendar,
}: CalendarInputType) => {
	const calendarRef = useRef(null);
	useOutsideClick(calendarRef, outsideClick);

	return (
		<CalendarInputContainer ref={calendarRef}>
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
			{children}
		</CalendarInputContainer>
	);
};
