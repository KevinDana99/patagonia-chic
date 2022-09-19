import React from 'react';
import { Story, Meta } from '@storybook/react';
import FooterComponent from './index';
import { FooterPropsType } from './types';
import moment from 'moment';

export default {
	title: 'Components/template-parts',
	component: FooterComponent,
} as Meta<typeof Footer>;

const Template: Story<FooterPropsType> = (args) => (
	<FooterComponent {...args} />
);

export const Footer: Story<FooterPropsType> = Template.bind({});

Footer.args = {
	language: {
		label: 'Portugués',
		symbol: '$',
		currency: 'ARS',
	},
	places: [
		{
			label: 'El Calafate',
			url: 'https://www.patagoniachic.com/el-calafate.html',
		},
	],
	footerTexts: {
		description:
			'Tenemos la excursion perfecta para vos en El Calafate. Reserva al mejor precio y de forma fácil',
		direction: 'Av. del Libertador 932, Z9405 El Calafate, Santa Cruz',
		copyrightMessage: `©Copyrights ${moment().year()} - PatagoniaChic.com EVT Leg. 15.528, Disp. 1795/14`,
		helpCenterLabel: 'Centro de ayuda',
		cancellationPolicesLabel: 'Política de cancelación',
		termsAndConditionsLabel: 'Términos y condiciones',
	},
	sections: [
		{
			title: 'Ayuda',
			label: [
				{
					label: 'Centro de ayuda',
					url: 'https://www.patagoniachic.com/contacto/',
				},
				{
					label: 'Politicas de cancelacion',
					url: '',
				},
				{
					label: 'Terminos y condiciones',
					url: 'https://www.patagoniachic.com/terminos-y-condiciones/',
					target: '_blank',
				},
			],
		},
		{
			title: 'Destinos',
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
					url: 'https://www.patagoniachic.com/medios-de-pago/',
				},
				{
					label: 'Mapa de excursiones',
					url: 'https://www.patagoniachic.com/mapa-excursiones/',
				},
				{
					label: 'Quienes somos',
					url: 'https://www.patagoniachic.com/quienes-somos/',
				},
				{
					label: 'Descargue gratis catalogo de excursiones',
					url: 'https://www.patagoniachic.com/el-calafate/excursiones/catalogo-de-excursiones/',
				},
			],
		},
	],
};
