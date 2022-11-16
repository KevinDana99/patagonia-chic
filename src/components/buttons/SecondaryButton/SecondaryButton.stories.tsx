import React from 'react';
import { Story, Meta } from '@storybook/react';
import SecondaryButton from '.';
import { SecondaryButtonType } from './types';
import styled from 'styled-components';

const StyledButton = styled(SecondaryButton)`
	color: #817575;
	margin: 20px;
	font-size: 25px;
`

export default {
	title: 'Components/buttons',
	component: SecondaryButton,
	argTypes: {
		onClick: { action: 'clicked' },
	},
} as Meta<typeof SecondaryButton>;

const Template: Story<SecondaryButtonType> = (args) => (
	<SecondaryButton {...args} />
);

export const Secondary = Template.bind({});
Secondary.args = {
	title: 'Menú de la excursión',
	loading: false,
	disabled: false,
};
