import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PrimaryCalendarType } from './types';
import PrimaryCalendar from '.';

export default {
	title: 'Components/calendars',
	component: PrimaryCalendar,
	argTypes: {
		onDateSelected: { action: 'onDateSelected' },
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
	availableDates: [
		new Date(Date.UTC(2022, 9, 23, 0, 0, 0)),
		new Date(Date.UTC(2022, 9, 24, 0, 0, 0)),
		new Date(Date.UTC(2022, 9, 27, 0, 0, 0)),
		new Date(Date.UTC(2022, 9, 28, 0, 0, 0)),
		new Date(Date.UTC(2022, 9, 29, 0, 0, 0)),
		new Date(Date.UTC(2022, 9, 30, 0, 0, 0)),
		new Date(Date.UTC(2022, 9, 31, 0, 0, 0)),
		new Date(Date.UTC(2022, 10, 1, 0, 0, 0)),
		new Date(Date.UTC(2022, 10, 2, 0, 0, 0)),
		new Date(Date.UTC(2022, 10, 3, 0, 0, 0)),
		new Date(Date.UTC(2022, 10, 4, 0, 0, 0)),
		new Date(Date.UTC(2022, 10, 11, 0, 0, 0)),
		new Date(Date.UTC(2022, 10, 13, 0, 0, 0)),
		new Date(Date.UTC(2022, 10, 14, 0, 0, 0)),
		new Date(Date.UTC(2022, 10, 18, 0, 0, 0)),
		new Date(Date.UTC(2022, 10, 10, 0, 0, 0)),
		new Date(Date.UTC(2022, 10, 23, 0, 0, 0)),
	],
	doubleCalendar: false,
	locale: 'es',
	highlightToday: false,
	texts: {
		availableReference: 'Disponible',
	},
};
