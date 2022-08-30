import React from 'react';
import { Story, Meta } from '@storybook/react';
import CustomIcon from '.';
import { CustomIconType } from './types';
import icons from './icons';

export default {
	title: 'Components/Graphics',
	component: CustomIcon,
	argTypes: {
		name: { control: 'select', options: Object.keys(icons) },
		size: { control: 'number' },
	},
} as Meta<typeof CustomIcon>;

const Template: Story<CustomIconType> = (args) => <CustomIcon {...args} />;

export const Icon: Story<CustomIconType> = Template.bind({});

Icon.args = {
	name: 'check-circle',
	color: 'orange',
	size: 25,
};
