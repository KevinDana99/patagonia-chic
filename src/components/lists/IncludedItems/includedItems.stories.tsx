import React from 'react';
import { Story, Meta } from '@storybook/react';
import { IncludedItemsType } from './types';
import IncludedItemsComponent from '.';

export default {
	title: 'Components/lists',
	component: IncludedItemsComponent,
} as Meta<typeof IncludedItemsComponent>;

const Template: Story<IncludedItemsType> = (args) => (
	<IncludedItemsComponent {...args} />
);

export const IncludedItems: Story<IncludedItemsType> = Template.bind({});

IncludedItems.args = {
	items: [
		{
			title: 'Inicio en su hotel de El Calafate',
			subTitle: 'Segun turno',
			included: { status: true },
		},

		{
			title: 'Almuerzo en cueva',
			subTitle: 'Segun turno',
			included: { status: true },
		},

		{
			title: 'Ticket de acceso al Parque Nacional ',
			included: {
				status: false,
				details: { title: 'Ver detalles', target: 'https://www.google.com.ar' },
			},
		},
	],
};
