import React from 'react';
import { Story, Meta } from '@storybook/react';
import FooterComponent from './index';
import { FooterPropsType } from './types';

export default {
	title: 'Components/template-parts',
	component: FooterComponent,
} as Meta<typeof Footer>;

const Template: Story<FooterPropsType> = (args) => (
	<FooterComponent {...args} />
);

export const Footer: Story<FooterPropsType> = Template.bind({});

Footer.args = {
	language: {
		label: 'Portugués',
		symbol: '$',
		currency: 'ARS',
	},
	places: [
		{
			label: 'El Calafate',
			url: 'https://www.patagoniachic.com/el-calafate.html',
		},
	],
};
