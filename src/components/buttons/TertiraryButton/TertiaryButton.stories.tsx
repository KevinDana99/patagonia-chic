import React from 'react';
import { Story, Meta } from '@storybook/react';

import TertiaryButton from '.';
import { TertiaryButtonType } from './types';

export default {
	title: 'Components/Buttons',
	component: TertiaryButton,
	argTypes: {
		onClick: { action: 'clicked' },
		onLoadEnd: { action: 'loaded' },
	},
} as Meta<typeof TertiaryButton>;

const Template: Story<TertiaryButtonType> = (args) => (
	<TertiaryButton {...args} />
);

export const Tertiary = Template.bind({});
Tertiary.args = {
	value: 'Ver detalle',
	loading: false,
};
