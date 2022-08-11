import React from 'react';
import { Story, Meta } from '@storybook/react';

import RadioButtonList from '.';
import { RadioButtonListPropsType } from './types';

export default {
	title: 'Components/forms',
	component: RadioButtonList,
	argTypes: {
		onChange: { action: 'onchange' },
	},
} as Meta<typeof RadioButtonList>;

const Template: Story<RadioButtonListPropsType> = (args) => (
	<RadioButtonList {...args} />
);

export const RadioButton: Story<RadioButtonListPropsType> = Template.bind({});

RadioButton.args = {
	defaultValue: 2,
	list: [
		{
			label: 'Opcion A',
			value: 1,
			name: 'Sofia',
		},
		{
			label: 'Opcion B',
			value: 2,
			name: 'Matias',
		},
		{
			label: 'Opcion C',
			value: 3,
			name: 'Sofia',
		},
		{
			label: 'Opcion D',
			value: 4,
			name: 'Matias',
		},
	],
};
