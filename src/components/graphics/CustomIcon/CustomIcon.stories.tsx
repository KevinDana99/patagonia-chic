import React from 'react';
import { Story, Meta } from '@storybook/react';
import CustomIconComponent from '.';
import { CustomIconType } from './types';
import icons from './icons';

export default {
	title: 'Components/graphics',
	component: CustomIconComponent,
	argTypes: {
		name: { control: 'select', options: Object.keys(icons) },
		size: { control: 'number' },
	},
} as Meta<typeof CustomIconComponent>;

const Template: Story<CustomIconType> = (args) => (
	<CustomIconComponent {...args} />
);

export const CustomIcon: Story<CustomIconType> = Template.bind({});

CustomIcon.args = {
	name: 'check-circle',
	color: 'orange',
	size: 25,
};
