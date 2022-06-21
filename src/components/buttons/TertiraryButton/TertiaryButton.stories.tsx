import React from 'react';
import { Story, Meta } from '@storybook/react';

import TertiaryButton from './TertiaryButton';
import { Button } from './types';

export default {
	title: 'Components/Buttons/TertiaryButton',
	component: TertiaryButton,
	argTypes: {
		onClick: { action: 'clicked' },
		onLoadEnd: { action: 'loaded' },
	},
} as Meta<typeof TertiaryButton>;

const Template: Story<Button> = (args) => <TertiaryButton {...args} />;

export const Tertiary = Template.bind({});
Tertiary.args = {
	value: 'Ver detalle',
};
