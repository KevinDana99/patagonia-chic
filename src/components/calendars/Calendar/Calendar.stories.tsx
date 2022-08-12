import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PrimaryCalendarType } from './types';
import PrimaryCalendar from '.';

export default {
	title: 'Components/calendars',
	component: PrimaryCalendar,
	argTypes: {
		onDaySelected: { action: 'onDaySelected' },
		onRangeSelected: { action: 'onRangeSelected' },
		onRangeStartDateSelected: { action: 'onRangeStartDateSelected' },
		onRangeEndDateSelected: { action: 'onRangeEndDateSelected' },
	},
} as Meta<typeof PrimaryCalendar>;

const Template: Story<PrimaryCalendarType> = (args) => (
	<PrimaryCalendar {...args} />
);

export const calendar = Template.bind({});
calendar.args = {
	shadow: true,
	range: false,
	disabledDates: [
		new Date(2022, 6, 23),
		new Date(2022, 6, 22),
		new Date(2022, 7, 22),
	],
	doubleCalendar: false,
};
