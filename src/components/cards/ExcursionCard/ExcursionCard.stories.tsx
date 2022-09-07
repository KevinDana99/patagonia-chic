import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ExcursionCardType } from './types';
import ExcursionCard from '.';

export default {
	title: 'Components/cards',
	component: ExcursionCard,
	argTypes: {},
} as Meta<typeof ExcursionCard>;

const Template: Story<ExcursionCardType> = (args) => (
	<ExcursionCard {...args} />
);

export const excursionCard = Template.bind({});
excursionCard.args = {};
