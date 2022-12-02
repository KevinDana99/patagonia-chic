import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CalendarPropsType } from './types';
import Calendar from '.';

export default {
	title: 'Components/calendars',
	component: Calendar,
	argTypes: {
		onDateSelected: { action: 'onDateSelected' },
		onRangeSelected: { action: 'onRangeSelected' },
		onRangeStartDateSelected: { action: 'onRangeStartDateSelected' },
		onRangeEndDateSelected: { action: 'onRangeEndDateSelected' },
		// width: { control: 'string' },
	},
} as Meta<typeof Calendar>;

const Template: Story<CalendarPropsType> = (args) => <Calendar {...args} />;

export const calendar = Template.bind({});
calendar.args = {
	range: false,
	// minDate: new Date(2022, 9, 2),
	maxDate: new Date(2023, 2, 1, 0, 0, 0),
	// availableDates: [
	// new Date(2022, 9, 23, 0, 0, 0),
	// new Date(2022, 9, 24, 0, 0, 0),
	// new Date(2022, 9, 27, 0, 0, 0),
	// new Date(2022, 9, 29, 0, 0, 0),
	// new Date(2022, 10, 10, 0, 0, 0),
	// new Date(2022, 9, 30, 0, 0, 0),
	// new Date(2022, 9, 31, 0, 0, 0),
	// new Date(2022, 10, 1, 0, 0, 0),
	// new Date(2022, 10, 2, 0, 0, 0),
	// new Date(2022, 10, 3, 0, 0, 0),
	// new Date(2022, 10, 13, 0, 0, 0),
	// new Date(2022, 10, 11, 0, 0, 0),
	// new Date(2022, 10, 23, 0, 0, 0),
	// new Date(2022, 10, 18, 0, 0, 0),
	// new Date(2022, 10, 14, 0, 0, 0),
	// new Date(2022, 10, 28, 0, 0, 0),
	// new Date(2022, 11, 4, 0, 0, 0),
	// ],
	doubleCalendar: false,
	locale: 'es',
	highlightToday: false,
	texts: {
		availableReference: 'Disponible',
	},
};
