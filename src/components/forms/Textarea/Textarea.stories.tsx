import React from 'react';
import { Story, Meta } from '@storybook/react';

import TextareaComponent from '.';
import { TextareaPropsType } from './types';

export default {
	title: 'Components/forms',
	component: TextareaComponent,
	argTypes: {
		onChange: { action: 'onChange' },
	},
} as Meta<typeof TextareaComponent>;

const Template: Story<TextareaPropsType> = (args) => (
	<TextareaComponent {...args} />
);

export const Textarea: Story<TextareaPropsType> = Template.bind({});

Textarea.args = {
	label: 'Agregar mensaje',
	error: true,
};
