import React from 'react';
import { Story, Meta } from '@storybook/react';
import { TimelineType } from './types';
import Timeline from '.';
import allSteps from '../../../examples/timeline/example';

export default {
	title: 'Components/lists',
	component: Timeline,
	argTypes: { clearReserve: { action: 'clearReserve' } },
} as Meta<typeof Timeline>;

const Template: Story<TimelineType> = (args) => <Timeline {...args} />;

export const timeline = Template.bind({});
timeline.args = {
	steps: allSteps,
};
