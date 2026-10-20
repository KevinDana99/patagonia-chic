import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SwiperCardsType } from './types';
import SwiperCards from '.';

export default {
	title: 'Components/lists',
	component: SwiperCards,
} as Meta<typeof SwiperCards>;

const Template: Story<SwiperCardsType> = (args) => <SwiperCards {...args} />;

export const swiperCards: Story<SwiperCardsType> = Template.bind({});

swiperCards.args = {
	list: [
		{
			id: '0',
			title:
				'Paga con tarjeta en cuotas fijas, con transferencia o en efectivo.',
			keywordColor: '#42BE58',
			keywords: ['cuotas', 'fijas'],
			icon: 'check-circle',
		},
		{
			id: '1',
			title:
				'La excursion a tu medida. Inclui translado, comida y mucho mas. Es tu decision.',
			keywordColor: '#FF0050',
			keywords: ['excursion', 'a', 'tu', 'medida'],
			icon: 'check-circle',
		},
		{
			id: '2',
			title:
				'Reserva al menor precio garantizado o te devolvemos la diferencia.',
			keywordColor: '#007AFF',
			keywords: ['precio', 'menor', 'garantizado'],
			icon: 'check-circle',
		},
		{
			id: '0',
			title:
				'Paga con tarjeta en cuotas fijas, con transferencia o en efectivo.',
			keywordColor: '#42BE58',
			keywords: ['cuotas', 'fijas'],
			icon: 'check-circle',
		},
		{
			id: '1',
			title:
				'La excursion a tu medida. Inclui translado, comida y mucho mas. Es tu decision.',
			keywordColor: '#FF0050',
			keywords: ['excursion', 'a', 'tu', 'medida'],
			icon: 'check-circle',
		},
		{
			id: '2',
			title:
				'Reserva al menor precio garantizado o te devolvemos la diferencia.',
			keywordColor: '#007AFF',
			keywords: ['precio', 'menor', 'garantizado'],
			icon: 'check-circle',
		},
		{
			id: '0',
			title:
				'Paga con tarjeta en cuotas fijas, con transferencia o en efectivo.',
			keywordColor: '#42BE58',
			keywords: ['cuotas', 'fijas'],
			icon: 'check-circle',
		},
		{
			id: '1',
			title:
				'La excursion a tu medida. Inclui translado, comida y mucho mas. Es tu decision.',
			keywordColor: '#FF0050',
			keywords: ['excursion', 'a', 'tu', 'medida'],
			icon: 'check-circle',
		},
		{
			id: '2',
			title:
				'Reserva al menor precio garantizado o te devolvemos la diferencia.',
			keywordColor: '#007AFF',
			keywords: ['precio', 'menor', 'garantizado'],
			icon: 'check-circle',
		},
		{
			id: '0',
			title:
				'Paga con tarjeta en cuotas fijas, con transferencia o en efectivo.',
			keywordColor: '#42BE58',
			keywords: ['cuotas', 'fijas'],
			icon: 'check-circle',
		},
		{
			id: '1',
			title:
				'La excursion a tu medida. Inclui translado, comida y mucho mas. Es tu decision.',
			keywordColor: '#FF0050',
			keywords: ['excursion', 'a', 'tu', 'medida'],
			icon: 'check-circle',
		},
		{
			id: '2',
			title:
				'Reserva al menor precio garantizado o te devolvemos la diferencia.',
			keywordColor: '#007AFF',
			keywords: ['precio', 'menor', 'garantizado'],
			icon: 'check-circle',
		},
		{
			id: '0',
			title:
				'Paga con tarjeta en cuotas fijas, con transferencia o en efectivo.',
			keywordColor: '#42BE58',
			keywords: ['cuotas', 'fijas'],
			icon: 'check-circle',
		},
		{
			id: '1',
			title:
				'La excursion a tu medida. Inclui translado, comida y mucho mas. Es tu decision.',
			keywordColor: '#FF0050',
			keywords: ['excursion', 'a', 'tu', 'medida'],
			icon: 'check-circle',
		},
		{
			id: '2',
			title:
				'Reserva al menor precio garantizado o te devolvemos la diferencia.',
			keywordColor: '#007AFF',
			keywords: ['precio', 'menor', 'garantizado'],
			icon: 'check-circle',
		},
		{
			id: '0',
			title:
				'Paga con tarjeta en cuotas fijas, con transferencia o en efectivo.',
			keywordColor: '#42BE58',
			keywords: ['cuotas', 'fijas'],
			icon: 'check-circle',
		},
		{
			id: '1',
			title:
				'La excursion a tu medida. Inclui translado, comida y mucho mas. Es tu decision.',
			keywordColor: '#FF0050',
			keywords: ['excursion', 'a', 'tu', 'medida'],
			icon: 'check-circle',
		},
		{
			id: '2',
			title:
				'Reserva al menor precio garantizado o te devolvemos la diferencia.',
			keywordColor: '#007AFF',
			keywords: ['precio', 'menor', 'garantizado'],
			icon: 'check-circle',
		},
	],
};
