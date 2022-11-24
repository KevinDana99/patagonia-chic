import React from 'react';
import { Story, Meta } from '@storybook/react';
import CloseButton from '.';
import { CloseButtonPropsType } from './types';

export default {
	title: 'Components/buttons/icons/CloseButton',
	component: CloseButton,
	argTypes: {
		onClick: { action: 'clicked' },
	},
} as Meta<typeof CloseButton>;

const PrimaryStory: Story<CloseButtonPropsType> = (args) => (
	<CloseButton {...args} />
);

export const close = PrimaryStory.bind({});
close.args = {};
