import React from 'react';
import { Story, Meta } from '@storybook/react';

import RadioButtonList from '.';
import { RadioButtonListItemPropsType } from './types';

export default {
	title: 'Components/forms',
	component: RadioButtonList,
	argTypes: {
		onChange: { action: 'onchange' },
	},
} as Meta<typeof RadioButtonList>;

const Template: Story<RadioButtonListItemPropsType> = (args) => (
	<RadioButtonList {...args} />
);

export const RadioButton: Story<RadioButtonListItemPropsType> = Template.bind(
	{}
);

RadioButton.args = {
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
	],
};
