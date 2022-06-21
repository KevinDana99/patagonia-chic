import React from 'react';
import { Story, Meta } from '@storybook/react';

import SelectComponent from '.';
import { SelectProps } from './types';

export default {
	title: 'Components/forms',
	component: SelectComponent,
	argTypes: {
		onChange: { action: 'onChange' },
	},
} as Meta<typeof SelectComponent>;

const Template: Story<SelectProps> = (args) => <SelectComponent {...args} />;

export const Select = Template.bind({});

Select.args = {
	title: 'Botas nro 1',
	value: [
		{
			name: 'Talle 41.5 EU / 8.5 US',
			stock: true,
		},
		{
			name: 'Talle 39 EU / 7 US',
			stock: true,
		},
		{
			name: 'Talle 40 EU / 7 US',
			stock: false,
		},
	],
	titleOptions: 'Seleccione talle',
};
