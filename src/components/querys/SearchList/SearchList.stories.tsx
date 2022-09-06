import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ListType } from './types';
import SearchList from '.';

export default {
	title: 'Components/SearchList',
	component: SearchList,
	argTypes: {},
} as Meta<typeof SearchList>;

const Template: Story<ListType> = (args) => <SearchList {...args} />;

export const list = Template.bind({});
list.args = {
	places: [
		{
			name: 'Cordoba',
			id: '2',
			province: 'Cordoba',
			country: 'Argentina',
			keywords: ['sierras'],
			featured: false,
		},

		{
			name: 'La chaqueña',
			id: '2',
			province: 'Misiones',
			country: 'Argentina',
			keywords: ['ciudad'],
			featured: true,
		},
		{
			name: 'El Calafate',
			img: 'https://i.ibb.co/54h791K/image3.png',
			id: '2',
			province: 'Santa Cruz',
			category: 'Navegacion',
			country: 'Argentina',
			keywords: ['monte', 'sierras', 'ciudad'],
			featured: true,
		},
		{
			name: 'El Chalten',
			img: 'https://i.ibb.co/FmwQfhS/image2.png',
			id: '2',
			province: 'Santa Cruz',
			category: 'Aventura',
			country: 'Argentina',
			keywords: ['monte', 'ciudad'],
			featured: false,
		},
		{
			name: 'El Faro',
			img: 'https://i.ibb.co/HtbgCjG/image.png',
			id: '2',
			province: 'Tierra del Fuego',
			category: 'Navegacion y Aventura',
			country: 'Argentina',
			keywords: ['monte', 'sierras'],
			featured: true,
		},
	],
	search: true,
	loading: false,
};
