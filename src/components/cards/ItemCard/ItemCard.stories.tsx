import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ExcursionCardType } from './types';
import ItemCard from '.';

export default {
	title: 'Components/cards',
	component: ItemCard,
	argTypes: {},
} as Meta<typeof ItemCard>;

const Template: Story<ExcursionCardType> = (args) => <ItemCard {...args} />;

export const itemCard = Template.bind({});
itemCard.args = {};
