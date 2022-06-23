import React from 'react';
import { Story, Meta } from '@storybook/react';
import PrimaryModal from '.';
import { modalType } from './types';
import Section from './sections/Section';

export default {
	title: 'components/modals',
	component: PrimaryModal,
	argTypes: {
		onclick: { action: 'clicked' },
	},
} as Meta<typeof PrimaryModal>;

const template: Story<modalType> = (args) => <PrimaryModal {...args} />;

export const Modal: Story<modalType> = template.bind({});

Modal.args = {
	title: 'Menu del almuerzo o cena en cueva',
	visible: false,
	coverImage:
		'https://s3-sa-east-1.amazonaws.com/patagoniachic.com/assets/menu/img/Nativo.jpg',
	Children: () => (
		<>
			<Section />
			<Section />
			<Section />
			<Section />
		</>
	),
};
