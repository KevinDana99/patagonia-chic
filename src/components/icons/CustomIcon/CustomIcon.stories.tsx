import React from 'react';
import { Story, Meta } from '@storybook/react';
import CustomIcon from '.';
import { CustomIconType } from './types';

export default {
	title: 'Components/Icons',
	component: CustomIcon,
} as Meta<typeof CustomIcon>;

const Template: Story<CustomIconType> = (args) => <CustomIcon {...args} />;

export const Icon: Story<CustomIconType> = Template.bind({});

Icon.args = {
	icon: 'IconCheck',
	color: 'orange',
	size: 25,
};
