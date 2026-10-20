import React from 'react';
import { Story, Meta } from '@storybook/react';

import CounterSelectComponent from '.';
import { CounterSelectType } from './types';

export default {
	title: 'Components/forms',
	component: CounterSelectComponent,
	argTypes: {
		onChange: { action: 'onChange' },
	},
} as Meta<typeof CounterSelectComponent>;

const Template: Story<CounterSelectType> = (args) => (
	<CounterSelectComponent {...args} />
);

export const CounterSelect: Story<CounterSelectType> = Template.bind({});

CounterSelect.args = {
	texts: {
		selectQuantity: 'Seleccione cantidad:',
	},
	value: 5,
};
