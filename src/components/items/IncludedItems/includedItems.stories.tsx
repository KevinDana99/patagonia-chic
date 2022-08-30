import React from 'react';
import { Story, Meta } from '@storybook/react';
import { IncludedItemsType } from './types';
import IncludedItems from '.';

export default {
	title: 'Components/items',
	component: IncludedItems,
} as Meta<typeof IncludedItems>;

const Template: Story<IncludedItemsType> = (args) => (
	<IncludedItems {...args} />
);

export const includedItems: Story<IncludedItemsType> = Template.bind({});

includedItems.args = {
	items: [
		{
			title: 'Inicio en su hotel de El Calafate',
			requirements: 'Segun turno',
			included: true,
		},

		{
			title: 'Almuerzo en cueva',
			requirements: 'Segun turno',
			included: true,
		},

		{
			title: 'Ticket de acceso al Parque Nacional ',
			included: false,
		},
	],
};
