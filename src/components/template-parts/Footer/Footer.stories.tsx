import React from 'react';
import { Story, Meta } from '@storybook/react';
import FooterComponent from './index';
import { FooterPropsType } from './types';
import moment from 'moment';

export default {
	title: 'Components/template-parts',
	component: FooterComponent,
	argTypes: {
		onClickLogo: { action: 'go to home' },
	},
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
	texts: {
		description:
			'Tenemos la excursion perfecta para vos en El Calafate. Reserva al mejor precio y de forma fácil',
		direction: 'Av. del Libertador 932, Z9405 El Calafate, Santa Cruz',
		copyrightMessage: `©Copyrights ${moment().year()} - PatagoniaChic.com EVT Leg. 15.528, Disp. 1795/14`,
		helpCenterLabel: 'Centro de ayuda',
		cancellationPolicesLabel: 'Política de cancelación',
		termsAndConditionsLabel: 'Términos y condiciones',
		helpTitle: 'Ayuda',
		destinyTitle: 'Destino',
		usefulLinks: 'Enlaces útiles',
		paymentMethodsAndPromotions: 'Medios de pago y promociones',
		excursionMap: 'Mapa de excursiones',
		about: 'Quienes somos',
		downloadExcursionCatalog: 'Descargue gratis catalogo de excursiones',
	},
	devMode: false,
};
