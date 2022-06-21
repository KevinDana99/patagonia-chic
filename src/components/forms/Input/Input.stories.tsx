import React from 'react';
import { Story, Meta } from '@storybook/react';

import Input from '.';
import { InputProps } from './types';

export default {
	title: 'Components/forms/Input',
	component: Input,
	argTypes: {
		onChange: { action: 'onChange' },
	},
} as Meta<typeof Input>;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const InputSurname = Template.bind({});

InputSurname.args = {
	text: 'Apellido',
};
