import React from 'react';
import { Story, Meta } from '@storybook/react';

import TertiaryButton from '.';
import { TertiaryButtonType } from './types';

export default {
	title: 'Components/buttons',
	component: TertiaryButton,
	argTypes: {
		onClick: { action: 'clicked' },
	},
} as Meta<typeof TertiaryButton>;

const Template: Story<TertiaryButtonType> = (args) => (
	<TertiaryButton {...args} />
);

export const Tertiary = Template.bind({});
Tertiary.args = {
	title: 'Ver detalle',
	loading: false,
	disabled: false,
};
