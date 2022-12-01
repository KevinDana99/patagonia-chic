import React from 'react';
import { Story, Meta } from '@storybook/react';
import { NavbarType } from './types';
import Navbar from '.';

export default {
	title: 'components/template-parts',
	component: Navbar,
	argTypes: {
		onClickMenu: { action: 'clicked menu' },
		onClickCart: { action: 'clicked cart' },
		onClickHelp: { action: 'clicked help' },
		onClickLogo: { action: 'clicked logo' },
	},
} as Meta<typeof Navbar>;

const template: Story<NavbarType> = (args) => (
	<div
		style={{
			height: '1000px',
		}}
	>
		<Navbar {...args} />
	</div>
);

export const navbar: Story<NavbarType> = template.bind({});

navbar.args = {
	cartProductCount: 75,
	texts: {
		helpOption: 'Ayuda',
	},
	initialTransparent: false,
};
