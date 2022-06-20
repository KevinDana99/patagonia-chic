import React from 'react';
import { Story, Meta } from '@storybook/react';
import PrimaryButton from '.';
import { PrimaryButtonType } from './types';

export default {
	title: 'Components/Buttons',
	component: PrimaryButton,
	argTypes: {
		onClick: { action: 'clicked' },
		onLoadEnd: { action: 'loaded' },
	},
} as Meta<typeof PrimaryButton>;

const Template: Story<PrimaryButtonType> = (args) => (
	<PrimaryButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
	title: 'Buscar excursiones',
	loading: false,
};
