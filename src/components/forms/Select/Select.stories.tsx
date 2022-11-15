import React from 'react';
import { Story, Meta } from '@storybook/react';

import SelectComponent from '.';
import { SelectPropsType } from './types';
import styled from 'styled-components';

export default {
	title: 'Components/forms',
	component: SelectComponent,
	argTypes: {
		onChange: { action: 'onChange' },
	},
} as Meta<typeof SelectComponent>;

const Template: Story<SelectPropsType> = (args) => (
	<SelectComponent {...args} />
);

export const Select: Story<SelectPropsType> = Template.bind({});

Select.args = {
	label: 'Botas nro 1',
	ListSelectOptions: [
		{
			label: 'Talle 41.5 EU / 8.5 US',
			disabled: false,
		},
		{
			label: 'Talle 39 EU / 7 US',
			disabled: true,
		},
		{
			label: 'Talle 40 EU / 7 US',
			disabled: false,
		},
	],
	placeholder: 'Seleccione talle',
	disabled: true
};
