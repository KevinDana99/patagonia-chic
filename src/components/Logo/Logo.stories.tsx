import React from 'react';
import { Story, Meta } from '@storybook/react';

import LogoComponent from '.';
import { LogoType } from './types';

export default {
	title: 'Components/logo',
	component: LogoComponent,
} as Meta<typeof LogoComponent>;

const Template: Story<LogoType> = (args) => <LogoComponent {...args} />;

export const Logo: Story<LogoType> = Template.bind({});

Logo.args = {
	size: 1500,
	theme: 'dark',
	containerFullWidth: true,
	align: 'center',
};
