import React, { useCallback, useEffect, useRef, useState } from 'react';
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
import Text from '../../../../texts/Text';

export const CalendarInput = ({
	disableSearch,
	labels,
	titles,
	values,
	clearData,
	outsideClick,
	calendarFocusedInput,
	showCalendar,
	isMobile,
	setDates,
	data,
	setFocused,
	closeCalendar,
	openCalendar,
}: CalendarInputType) => {
	const calendarRef = useRef(null);
	useOutsideClick(calendarRef, outsideClick);
	const [hover, setHover] = useState({ start: false, end: false });

	const enableHover = useCallback(
		(option: string) => {
			if (option == values?.startDate?.name) {
				setHover({ start: true, end: false });
			} else {
				setHover({ end: true, start: false });
			}
		},
		[values?.startDate?.name]
	);

	const disableHover = useCallback(
		(option: string) => {
			if (option == values?.startDate?.name) {
				setHover({ start: false, end: false });
			} else {
				setHover({ end: false, start: false });
			}
		},
		[values?.startDate?.name]
	);

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
								<Label>
									<Text size={12} weight={'semi-bold'}>
										{labels[0]}
									</Text>
								</Label>
								<Title disableSearch={disableSearch.startDate}>
									<Text
										size={14}
										weight={'regular'}
										color={disableSearch.startDate && 'red'}
									>
										{values?.startDate?.name ?? titles[0]}
									</Text>
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
								<Label>
									<Text size={12} weight={'semi-bold'}>
										{labels[1]}
									</Text>
								</Label>
								<Title disableSearch={disableSearch.endDate}>
									<Text
										size={14}
										weight={'regular'}
										color={disableSearch.endDate && 'red'}
									>
										{values?.endDate?.name ?? titles[1]}
									</Text>
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
