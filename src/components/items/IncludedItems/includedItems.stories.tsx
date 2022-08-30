import React from 'react';
import { Story, Meta } from '@storybook/react';
import { IncludedItemsType } from './types';
import IncludedItems from '.';

export default {
	title: 'Components/IncludedItems',
	component: IncludedItems,
} as Meta<typeof IncludedItems>;

const Template: Story<IncludedItemsType> = (args) => (
	<IncludedItems {...args} />
);

export const includedItems: Story<IncludedItemsType> = Template.bind({});

includedItems.args = {
	items: [
		{
			title: 'titulo',
			requirements: 'Sacar turno',
			included: true,
		},

		{
			title: 'titulo',
			requirements: 'Sacar turno',
			included: true,
		},

		{
			title: 'titulo',
			requirements: 'Sacar turno',
			included: false,
		},
	],
};
