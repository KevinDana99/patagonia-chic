import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ItemCardType } from './types';
import ItemCard from '.';

export default {
	title: 'Components/cards',
	component: ItemCard,
	argTypes: {},
} as Meta<typeof ItemCard>;

const Template: Story<ItemCardType> = (args) => <ItemCard {...args} />;

export const itemCard: Story<ItemCardType> = Template.bind({});
itemCard.args = {
	title: 'Este es el titulo de la card.',
	icon: 'island',
	keywords: ['titulo', 'card'],
	keywordColor: 'violet',
};
