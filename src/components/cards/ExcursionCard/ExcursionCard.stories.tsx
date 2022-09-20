import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ExcursionCardType } from './types';
import ExcursionCard from '.';

export default {
	title: 'Components/cards',
	component: ExcursionCard,
	argTypes: {},
} as Meta<typeof ExcursionCard>;

const Template: Story<ExcursionCardType> = (args) => (
	<ExcursionCard {...args} />
);

export const excursionCard = Template.bind({});
excursionCard.args = {
	coverImage: 'https://i.ibb.co/VMbg2QC/roi-dimor-wpje5h-Mf-Jj0-unsplash-1.png',
	subTitle: 'El Calafate',
	title: 'Perito Moreno: Pasarelas',
	price: '$20.600',
	currency: 'ars',
	subPrice: '$27.800',
	date: '04 Septiembre',
	isAddedToCart: false,
	isAvaiable: false,
	options: {
		countReservesWeek: '800 veces reservado la ultima semana',
		timeLatestReserve: 'Reservado hace 30 horas atras',
	},
};
