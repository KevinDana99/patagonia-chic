import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SpinnerType } from './types';
import Spinner from './Spinner';

export default {
	title: 'Components/spinners/Spinner',
	component: Spinner,
	argTypes: {},
} as Meta<typeof Spinner>;

const Template: Story<SpinnerType> = (args) => <Spinner {...args} />;

export const SpinnerPrimary = Template.bind({});
SpinnerPrimary.args = {
	size: '30',
	marginLeft: '0',
	marginRight: '0',
	marginTop: '0',
	marginBottom: '0',
};
