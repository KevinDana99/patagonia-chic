import React from 'react';
import { Story, Meta } from '@storybook/react';
import Accordion from './index';
import { AccordionType } from './types';
import Text from '../../texts/Text';

export default {
	title: 'Components/accordions',
	component: Accordion,
} as Meta<typeof Accordion>;

const Template: Story<AccordionType> = (args) => <Accordion {...args} />;

export const accodion: Story<AccordionType> = Template.bind({});

accodion.args = {
	sections: [
		{
			content: (
				<div>
					<Text>Hello world</Text>
				</div>
			),
			title: 'Esta es una seccion',
		},
		{
			label: [
				{ label: 'Titulo 1', url: 'https://www.google.com.ar' },
				{ label: 'Titulo 2', url: 'https://www.google.com.ar' },
				{ label: 'Titulo 3', url: 'https://www.google.com.ar' },
			],
			title: 'Esta es una seccion',
		},
		{
			label: [
				{ label: 'Titulo 1', url: 'https://www.google.com.ar' },
				{ label: 'Titulo 2', url: 'https://www.google.com.ar' },
			],
			title: 'Esta es una seccion',
		},
	],
};
