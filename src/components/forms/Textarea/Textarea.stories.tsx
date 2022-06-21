import React from 'react';
import { Story, Meta } from '@storybook/react';

import TextareaComponent from '.';
import { TextareaProps } from './types';

export default {
	title: 'Components/forms',
	component: TextareaComponent,
	argTypes: {
		onChange: { action: 'onChange' },
	},
} as Meta<typeof TextareaComponent>;

const Template: Story<TextareaProps> = (args) => (
	<TextareaComponent {...args} />
);

export const Textarea: Story<TextareaProps> = Template.bind({});

Textarea.args = {
	text: 'Agregar mensaje',
};
