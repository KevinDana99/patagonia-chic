import React from 'react';
import { Story, Meta } from '@storybook/react';
import PrimaryButton from '.';
import { Button } from './types';

export default {
	title: 'Components/Buttons',
	component: PrimaryButton,
	argTypes: {
		onClick: { action: 'clicked' },
		onLoadEnd: { action: 'loaded' },
	},
} as Meta<typeof PrimaryButton>;

const Template: Story<Button> = (args) => <PrimaryButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	value: 'Buscar excursiones',
	loading: false,
};
