import React from 'react';
import { Story, Meta } from '@storybook/react';
import PrimaryButton from '.';
import { PrimaryButtonType } from './types';
import { IoSearch } from 'react-icons/io5';

export default {
	title: 'Components/buttons',
	component: PrimaryButton,
	argTypes: {
		onClick: { action: 'clicked' },
	},
} as Meta<typeof PrimaryButton>;

const Template: Story<PrimaryButtonType> = (args) => (
	<PrimaryButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
	title: 'Buscar excursiones',
	loading: false,
	disabled: false,
	IconComponent: IoSearch,
};
