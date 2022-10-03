import React from 'react';
import { Story, Meta } from '@storybook/react';
import PrimaryButton from '.';
import { PrimaryButtonType } from './types';
import { IoSearch } from 'react-icons/io5';

export default {
	title: 'Components/buttons/PrimaryButton',
	component: PrimaryButton,
	argTypes: {
		onClick: { action: 'clicked' },
	},
} as Meta<typeof PrimaryButton>;

const PrimaryStory: Story<PrimaryButtonType> = (args) => (
	<PrimaryButton {...args} />
);

export const color = PrimaryStory.bind({});
color.args = {
	title: 'Buscar excursiones',
	loading: false,
	disabled: false,
	IconComponent: IoSearch,
};

export const light = PrimaryStory.bind({});
light.args = {
	title: 'Buscar excursiones',
	loading: false,
	disabled: false,
	IconComponent: IoSearch,
	theme: 'mono',
};
