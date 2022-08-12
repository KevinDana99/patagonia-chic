import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PrimaryCardType } from './types';
import PrimaryCard from '.';

export default {
	title: 'Components/cards',
	component: PrimaryCard,
	argTypes: {},
} as Meta<typeof PrimaryCard>;

const Template: Story<PrimaryCardType> = (args) => (
	<PrimaryCard {...args}>
		<div>Hello world</div>
	</PrimaryCard>
);

export const card = Template.bind({});
card.args = {
	hover: true,
};
