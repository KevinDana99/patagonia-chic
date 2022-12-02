import React from 'react';
import { Story, Meta } from '@storybook/react';
import PrimaryButton from '.';
import { PrimaryButtonType } from './types';
import { IoSearch } from 'react-icons/io5';
import { Container } from './styled';
export default {
	title: 'Components/buttons/PrimaryButton',
	component: PrimaryButton,
	argTypes: {
		onClick: { action: 'clicked' },
	},
} as Meta<typeof PrimaryButton>;

const PrimaryStory: Story<PrimaryButtonType> = (args) => (
	<Container>
		<PrimaryButton {...args} />
	</Container>
);

export const color: Story<PrimaryButtonType> = PrimaryStory.bind({});
color.args = {
	title: 'Buscar excursiones',
	loading: false,
	disabled: false,
	iconComponent: IoSearch,
	textLoadingButton: 'Cargando...',
	width: '80%',
	height: '50%',
};

export const light: Story<PrimaryButtonType> = PrimaryStory.bind({});
light.args = {
	title: 'Buscar excursiones',
	loading: false,
	disabled: false,
	iconComponent: IoSearch,
	theme: 'mono',
};
