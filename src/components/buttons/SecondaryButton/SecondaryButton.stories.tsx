import React from 'react';
import { Story, Meta } from '@storybook/react';

import SecondaryButton from './SecondaryButton';
import { Button } from './types';

export default {
	title: 'Components/Buttons/SecondaryButton',
	component: SecondaryButton,
	argTypes: {
		onClick: { action: 'clicked' },
		onLoadEnd: { action: 'loaded' },
	},
} as Meta<typeof SecondaryButton>;

const Template: Story<Button> = (args) => <SecondaryButton {...args} />;

export const Secondary = Template.bind({});
Secondary.args = {
	value: 'Menú de la excursión',
};
