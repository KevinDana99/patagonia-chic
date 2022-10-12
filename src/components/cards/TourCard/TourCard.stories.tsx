import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ExcursionCardType } from './types';
import TourCard from '.';

const exampleList = [
	{
		alt: 'image1',
		uri: 'https://i.ibb.co/VMbg2QC/roi-dimor-wpje5h-Mf-Jj0-unsplash-1.png',
	},
	{
		alt: 'image2',
		uri: 'https://i.ibb.co/VMbg2QC/roi-dimor-wpje5h-Mf-Jj0-unsplash-1.png',
	},
	{
		alt: 'image3',
		uri: 'https://i.ibb.co/VMbg2QC/roi-dimor-wpje5h-Mf-Jj0-unsplash-1.png',
	},
	{
		alt: 'image4',
		uri: 'https://i.ibb.co/VMbg2QC/roi-dimor-wpje5h-Mf-Jj0-unsplash-1.png',
	},
	{
		alt: 'image5',
		uri: 'https://i.ibb.co/VMbg2QC/roi-dimor-wpje5h-Mf-Jj0-unsplash-1.png',
	},
];

export default {
	title: 'Components/cards',
	component: TourCard,
	argTypes: {
		onViewCart: { action: 'onViewCart' },
		onAddedToCart: { action: 'onAddedToCart' },
		onViewDetails: { action: 'onViewDetails' },
	},
} as Meta<typeof TourCard>;

const Template: Story<ExcursionCardType> = (args) => <TourCard {...args} />;

export const tourCard = Template.bind({});
tourCard.args = {
	imageList: exampleList,
	subTitle: 'El Calafate',
	title: 'Perito Moreno: Pasarelas',
	price: '20.600',
	currencySymbol: '$',
	currencyCode: 'ARS',
	subPrice: '27.800',
	date: {
		month: 'septiembre',
		day: '04',
	},
	isAddedToCart: false,
	isAvailable: false,
	bookingsThisWeekCount: 800,
	texts: {
		buttonDefaultText: 'Reservar',
		buttonAddedToCartText: 'Ver carrito',
		buttonAvaiableText: 'Ver detalle',
		detailsAddedText: 'Agregaste esta excursion a tu carrito',
		bookingsThisWeekText: 'veces reservado la ultima semana',
		lastBookingTimeText: 'Reservado hace 30 horas atras',
	},
};
