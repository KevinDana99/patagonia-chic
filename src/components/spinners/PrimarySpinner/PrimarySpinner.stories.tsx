import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SpinnerType } from './types';
import PrimarySpinner from '.';

export default {
	title: 'Components/spinners',
	component: PrimarySpinner,
	argTypes: {},
} as Meta<typeof PrimarySpinner>;

const Template: Story<SpinnerType> = (args) => <PrimarySpinner {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	size: '30',
	marginLeft: '0',
	marginRight: '0',
	marginTop: '0',
	marginBottom: '0',
};
