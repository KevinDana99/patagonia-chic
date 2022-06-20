import React from 'react';
import { Story, Meta } from '@storybook/react';

import SecondaryButton from '.';
import { SecondaryButtonType } from './types';

export default {
	title: 'Components/Buttons',
	component: SecondaryButton,
	argTypes: {
		onClick: { action: 'clicked' },
		onLoadEnd: { action: 'loaded' },
	},
} as Meta<typeof SecondaryButton>;

const Template: Story<SecondaryButtonType> = (args) => (
	<SecondaryButton {...args} />
);

export const Secondary = Template.bind({});
Secondary.args = {
	title: 'Menú de la excursión',
	loading: false,
};
