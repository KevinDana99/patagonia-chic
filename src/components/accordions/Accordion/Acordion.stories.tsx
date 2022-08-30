import React from 'react';
import { Story, Meta } from '@storybook/react';
import Accordion from './index';

export default {
	title: 'Components/Acordions',
	component: Accordion,
} as Meta<typeof Accordion>;

const Template: Story = (args) => <Accordion {...args} />;

export const primaryAccordion: Story = Template.bind({});
