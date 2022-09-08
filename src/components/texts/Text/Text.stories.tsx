import React from 'react';
import { Story, Meta } from '@storybook/react';
import { TextPropsType } from './types';
import TextComponent from '.';

export default {
	title: 'Components/texts',
	component: TextComponent,
	argTypes: {},
} as Meta<typeof TextComponent>;

const Template: Story<TextPropsType> = (args) => <TextComponent {...args} />;

export const Text = Template.bind({});
Text.args = {
	children: 'Esto no es coca papi',
};
