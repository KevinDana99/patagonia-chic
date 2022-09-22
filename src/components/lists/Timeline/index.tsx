import React from 'react';
import { withFontStyles } from '../../../helpers/hocs/withFontStyles';
import ItemTimeline from './ItemTimeline';
import { Container } from './styled';
import { TimelineType } from './types';

const PrimaryTimeline = ({ steps }: TimelineType) => {
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
					/>
				);
			})}
		</Container>
	);
};

const Timeline = withFontStyles(PrimaryTimeline);

export default Timeline;
