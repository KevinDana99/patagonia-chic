import React from 'react';
import { Story, Meta } from '@storybook/react';
import FooterMain from '.';
import { FooterPropsType } from './types';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';

export default {
	title: 'Components/footer',
	component: FooterMain,
} as Meta<typeof FooterMain>;

const Template: Story<FooterPropsType> = (args) => <FooterMain {...args} />;

export const Footer: Story<FooterPropsType> = Template.bind({});

Footer.args = {
	leftList: {
		logo: {
			size: 300,
		},
		language: [
			{
				flag: 'https://upload.wikimedia.org/wikipedia/commons/0/02/AR-Argentina-Flag-icon.png',
				label: 'ARG',
			},
		],
		description: [
			'Tenemos la excursion perfecta para vos en El Calafate. Reserva al mejor precio y de forma fácil',
			'Av. del Libertador 932, Z9405 El Calafate, Santa Cruz',
		],
	},
	sectionList: [
		{
			title: 'Ayuda',
			label: [
				{
					label: 'Centro de ayuda',
					url: '',
				},
				{
					label: 'Política de cancelación',
					url: '',
				},
				{
					label: 'Términos y condiciones',
					url: '',
				},
			],
		},
		{
			title: 'Destino',
			label: [
				{
					label: 'El Calafate',
					url: '',
				},
			],
		},
		{
			title: 'Enlaces útiles',
			label: [
				{
					label: 'Medios de pago y promociones',
					url: '',
				},
				{
					label: 'Mapa de excursiones',
					url: '',
				},
				{
					label: 'Quienes somos',
					url: '',
				},
				{
					label: 'Descargue gratis catalogo de excursiones',
					url: '',
				},
			],
		},
	],
	sectionBottom: {
		label:
			'@Copyrights 2022 - PatagoniaChic.com EVT Leg. 15.528, Disp. 1795/14',
		Icons: [FaFacebookF, AiFillInstagram, AiFillYoutube],
	},

	color: 'black',
};
