import React from 'react';
import { Story, Meta } from '@storybook/react';
import PrimaryModal from '.';
import { modalType } from './types';
import Section from './sections/Section';

export default {
	title: 'components/modals',
	component: PrimaryModal,
	argTypes: {
		onClose: { action: 'Cerrado' },
		onOpen: { action: 'Abierto' },
	},
} as Meta<typeof PrimaryModal>;

const template: Story<modalType> = (args) => <PrimaryModal {...args} />;

export const Modals: Story<modalType> = template.bind({});

Modals.args = {
	headerText: '',
	disableClose: false,
	visible: false,
	closeOnTouchOutside: false,
	title: 'Menu del almuerzo o cena en cueva',
	onClose: () => {
		console.log('Cerrado');
	},
	onOpen: () => {
		console.log('Abierto');
	},
	closeAction: Date.now,
	coverImage:
		'https://s3-sa-east-1.amazonaws.com/patagoniachic.com/assets/menu/img/Nativo.jpg',
	Children: () => (
		<>
			<Section />
		</>
	),
};
