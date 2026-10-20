import React from 'react';
import { Story, Meta } from '@storybook/react';

import CheckboxList from '.';
import { CheckboxListPropsType } from './types';

export default {
	title: 'Components/forms',
	component: CheckboxList,
	argTypes: {
		onChange: { action: 'onchange' },
	},
} as Meta<typeof CheckboxList>;

const Template: Story<CheckboxListPropsType> = (args) => (
	<CheckboxList {...args} />
);

export const Checkbox: Story<CheckboxListPropsType> = Template.bind({});

Checkbox.args = {
	list: [
		{
			label: 'Opcion A',
			value: 1,
		},
		{
			label: 'Opcion B',
			value: 2,
		},
		{
			label: 'Opcion C',
			value: 3,
		},
		{
			label: 'Opcion D',
			value: 4,
		},
		{
			label: 'Opcion E',
			value: 5,
		},
	],
};
