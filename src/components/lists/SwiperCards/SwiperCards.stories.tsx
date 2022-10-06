import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SwiperCardsType } from './types';
import SwiperCards from '.';
import exampleList from '../../../examples/swiperCards/list.json';

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
				'Paga con tarjeta en cuotas fijas, con transferencia o en efectivo',
			keywordColor: 'lightgreen',
			keywords: ['cuotas', 'fijas'],
			icon: 'island',
		},
		{
			id: '1',
			title:
				'La excursion a tu medida. Inclui translado, comida y mucho mas. Es tu decision.',
			keywordColor: 'pink',
			keywords: ['excursion', 'a', 'tu', 'medida'],
			icon: 'island',
		},
		{
			id: '2',
			title:
				'Reserva al menor precio garantizado o te devolvemos la diferencia.',
			keywordColor: 'blue',
			keywords: ['precio', 'menor', 'garantizado'],
			icon: 'island',
		},
	],
};
