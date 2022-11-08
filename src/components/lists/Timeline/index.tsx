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

		return 'carlos';
	};

	return (
		<Container>
			{steps.map((step, index) => {
				{
					console.log(step?.dateTime);
				}
				return steps.length == 1 ? (
					<>
						<ItemTimeline
							key={index}
							title={texts.textAvaiableDay}
							secondaryTitle={'27 Junio'}
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
							secondaryTitle={'29 Junio'}
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
								secondaryTitle={'27 Junio'}
								active={false}
								clear={clearReserve}
								id={step.id}
							/>
						)}
						<ItemTimeline
							key={index}
							title={step.title}
							secondaryTitle={step?.secondaryTitle}
							tertiaryTitle={step?.tertiaryTitle}
							active={step.active}
							clear={clearReserve}
							id={step.id}
						/>
						{index == steps.length - 1 && (
							<ItemTimeline
								key={index}
								title={texts.textAvaiableDay}
								secondaryTitle={'1 Julio'}
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
