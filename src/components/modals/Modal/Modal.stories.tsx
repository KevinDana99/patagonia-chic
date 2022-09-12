import React from 'react';
import { Story, Meta } from '@storybook/react';
import PrimaryModal from '.';
import { ModalType } from './types';
import Section from '../../../examples/modal/sections/Section';

export default {
	title: 'components/modals',
	component: PrimaryModal,
	argTypes: {},
} as Meta<typeof PrimaryModal>;

const template: Story<ModalType> = (args) => <PrimaryModal {...args} />;

export const Modals: Story<ModalType> = template.bind({});

Modals.args = {
	width: '570px',
	headerText: '',
	disableClose: false,
	visible: false,
	closeOnTouchOutside: false,
	title: 'Menu del almuerzo o cena en cueva',
	renderOpenButton: false,
	onClose: () => {
		console.log('Cerrado');
	},
	onOpen: () => {
		console.log('Abierto');
	},
	coverImage:
		'https://s3-sa-east-1.amazonaws.com/patagoniachic.com/assets/menu/img/Nativo.jpg',
};
