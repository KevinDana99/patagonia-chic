import React from 'react';
import ItemTimeline from './ItemTimeline';
import { Container } from './styled';
import { TimelineType } from './types';
import moment from 'moment';

const Timeline = ({
	steps,
	clearReserve,
	texts,
	momentConfig,
}: TimelineType) => {
	moment.locale(momentConfig.locale);

	const convertDateToString = (date: Date) => {
		const monthsToString = moment.months();
		const currentMonthToString = monthsToString[date.getMonth()];
		const currentDayToString = date.getDate();

		return `${currentDayToString} ${currentMonthToString}`;
	};

	const subtractDays = (date: Date, days: number) => {
		return new Date().setDate(date.getDate() - days);
	};

	const addDays = (date: Date, days: number) => {
		return new Date().setDate(date.getDate() + days);
	};

	return (
		<Container>
			{steps.map((step, index) => {
				return steps.length == 1 ? (
					<>
						<ItemTimeline
							key={index}
							title={texts.textAvaiableDay}
							secondaryTitle={
								step.dateTime
									? convertDateToString(
											new Date(subtractDays(step?.dateTime, 1))
									  )
									: step.secondaryTitle
							}
							active={false}
							clear={clearReserve}
							id={step.id}
						/>
						<ItemTimeline
							key={index}
							title={step.title}
							secondaryTitle={
								step.dateTime
									? convertDateToString(step?.dateTime)
									: step.secondaryTitle
							}
							tertiaryTitle={step?.tertiaryTitle}
							active={step.active}
							clear={clearReserve}
							id={step.id}
						/>
						<ItemTimeline
							key={index}
							title={texts.textAvaiableDay}
							secondaryTitle={
								step.dateTime
									? convertDateToString(new Date(addDays(step?.dateTime, 1)))
									: step.secondaryTitle
							}
							active={false}
							clear={clearReserve}
							id={step.id}
						/>
					</>
				) : (
					<>
						{index == 0 && (
							<ItemTimeline
								key={index}
								title={texts.textAvaiableDay}
								secondaryTitle={
									step.dateTime
										? convertDateToString(
												new Date(subtractDays(step?.dateTime, 1))
										  )
										: step.secondaryTitle
								}
								active={false}
								clear={clearReserve}
								id={step.id}
							/>
						)}
						<ItemTimeline
							key={index}
							title={step.title}
							secondaryTitle={
								step.dateTime
									? convertDateToString(step.dateTime)
									: step.secondaryTitle
							}
							tertiaryTitle={step?.tertiaryTitle}
							active={step.active}
							clear={clearReserve}
							id={step.id}
						/>
						{index == steps.length - 1 && (
							<ItemTimeline
								key={index}
								title={texts.textAvaiableDay}
								secondaryTitle={
									step.dateTime
										? convertDateToString(new Date(addDays(step?.dateTime, 1)))
										: step.secondaryTitle
								}
								active={false}
								clear={clearReserve}
								id={step.id}
							/>
						)}
					</>
				);
			})}
		</Container>
	);
};

export default Timeline;
