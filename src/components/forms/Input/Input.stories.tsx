import React from 'react';
import { Story, Meta } from '@storybook/react';

import InputComponent from '.';
import { InputPropsType } from './types';

export default {
	title: 'Components/forms',
	component: InputComponent,
	argTypes: {
		onChange: { action: 'onChange' },
	},
} as Meta<typeof InputComponent>;

const Template: Story<InputPropsType> = (args) => <InputComponent {...args} />;

export const Input: Story<InputPropsType> = Template.bind({});

Input.args = {
	label: 'Apellido',
	inputProps: {
		type: 'text',
	},
	disabled: true,
};
