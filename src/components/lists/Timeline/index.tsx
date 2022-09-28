import React from 'react';
import ItemTimeline from './ItemTimeline';
import { Container } from './styled';
import { TimelineType } from './types';

const Timeline = ({ steps, clearReserve }: TimelineType) => {
	return (
		<Container>
			{steps.map((step, index) => {
				return (
					<ItemTimeline
						key={index}
						title={step.title}
						secondaryTitle={step?.secondaryTitle}
						tertiaryTitle={step?.tertiaryTitle}
						active={step.active}
						clear={clearReserve}
						id={step.id}
					/>
				);
			})}
		</Container>
	);
};

export default Timeline;
