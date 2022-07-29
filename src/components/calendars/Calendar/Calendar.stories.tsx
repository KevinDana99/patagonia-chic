import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PrimaryCalendarType } from './types';
import PrimaryCalendar from '.';

export default {
	title: 'Components/calendars',
	component: PrimaryCalendar,
	argTypes: {},
} as Meta<typeof PrimaryCalendar>;

const Template: Story<PrimaryCalendarType> = (args) => (
	<PrimaryCalendar {...args} />
);

export const calendar = Template.bind({});
calendar.args = {
	onDaySelected: (day) => {
		console.log(day);
	},
	range: false,
};
