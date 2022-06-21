import React from 'react';
import { Story, Meta } from '@storybook/react';

import RadioButton from '.';
import { RadioButtonListItemProps } from './types';

export default {
	title: 'Components/forms/RadioButton',
	component: RadioButton,
	argTypes: {
		onChange: { action: 'onchange' },
	},
} as Meta<typeof RadioButton>;

const Template: Story<RadioButtonListItemProps> = (args) => (
	<RadioButton {...args} />
);

export const RadioButtonShape: Story<RadioButtonListItemProps> = Template.bind(
	{}
);

RadioButtonShape.args = {
	list: [
		{
			title: 'Opcion A',
			value: 1,
			name: 'Sofia',
		},
		{
			title: 'Opcion B',
			value: 2,
			name: 'Matias',
		},
	],
};
