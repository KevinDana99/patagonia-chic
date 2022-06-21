import React from 'react';
import { Story, Meta } from '@storybook/react';

import Checkbox from '.';
import { CheckboxPropsType } from './types';

export default {
	title: 'Components/forms/Checkbox',
	component: Checkbox,
	argTypes: {
		onChange: { action: 'onchange' },
	},
} as Meta<typeof Checkbox>;

const Template: Story<CheckboxPropsType> = (args) => <Checkbox {...args} />;

export const CheckboxShape: Story<CheckboxPropsType> = Template.bind({});

CheckboxShape.args = {
	list: [
		{
			title: 'Opcion A',
			value: 1,
		},
		{
			title: 'Opcion B',
			value: 2,
		},
	],
};
