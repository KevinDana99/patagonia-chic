import React, { useEffect, useRef, useState } from 'react';
import { useOutsideClick } from '../../../../../hooks/useOutsideClick';

import { Calendar } from './Calendar';
import {
	CloseIcon,
	Divider,
	Label,
	OptionContainer,
	OptionContent,
	Title,
} from '../../styled';

import {
	CalendarContainer,
	CalendarDesktopContainer,
	CalendarInputContainer,
} from './styled';

import { CalendarInputType } from '../../types';

export const CalendarInput = ({
	disableSearch,
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
	openCalendar,
}: CalendarInputType) => {
	const calendarRef = useRef(null);
	useOutsideClick(calendarRef, outsideClick);
	const [hover, setHover] = useState({ start: false, end: false });

	const enableHover = (option: string) => {
		if (option == values?.startDate?.name) {
			setHover({ ...hover, start: true, end: false });
		} else {
			setHover({ ...hover, end: true, start: false });
		}
	};

	const disableHover = (option: string) => {
		if (option == values?.startDate?.name) {
			setHover({ ...hover, start: false, end: false });
		} else {
			setHover({ ...hover, end: false, start: false });
		}
	};

	useEffect(() => {
		values?.startDate?.name && disableHover(values?.startDate?.name);
		values?.endDate?.name && disableHover(values?.endDate?.name);
	}, [data]);

	return (
		<CalendarInputContainer ref={calendarRef}>
			<CalendarDesktopContainer>
				{isMobile ? (
					<Divider />
				) : (
					<>
						{' '}
						<Divider />
						<OptionContainer
							onMouseOver={() =>
								values?.startDate?.name && enableHover(values?.startDate?.name)
							}
							onMouseOut={() =>
								values?.startDate?.name && disableHover(values?.startDate?.name)
							}
							onClick={openCalendar}
							isSelected={calendarFocusedInput === 'startDate' && showCalendar}
						>
							<OptionContent>
								<Label>{labels[0]}</Label>
								<Title disableSearch={disableSearch.startDate}>
									{values?.startDate?.name ?? titles[0]}
								</Title>
							</OptionContent>
							{values?.startDate?.name && hover.start && (
								<CloseIcon onClick={clearData} />
							)}
						</OptionContainer>
						<Divider />
						<OptionContainer
							onClick={openCalendar}
							onMouseOver={() => values?.endDate?.name && enableHover('end')}
							onMouseOut={() => values?.endDate?.name && disableHover('end')}
							isSelected={calendarFocusedInput === 'endDate' && showCalendar}
						>
							<OptionContent>
								<Label>{labels[1]}</Label>
								<Title disableSearch={disableSearch.endDate}>
									{values?.endDate?.name ?? titles[1]}
								</Title>
							</OptionContent>
							{values?.endDate?.name && hover.end && (
								<CloseIcon onClick={clearData} />
							)}
						</OptionContainer>
						<Divider />
					</>
				)}
			</CalendarDesktopContainer>
			{showCalendar && (
				<CalendarContainer>
					<Calendar
						setDates={setDates}
						values={data}
						setFocused={setFocused}
						focused={calendarFocusedInput}
						closeCalendar={closeCalendar}
						isMobile={isMobile}
					/>
				</CalendarContainer>
			)}
		</CalendarInputContainer>
	);
};
