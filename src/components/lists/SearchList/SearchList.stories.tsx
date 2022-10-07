import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SearchListPropsType } from './types';
import SearchListComponent from '.';
import places from '../../../examples/values/places.json';

export default {
	title: 'Components/lists',
	component: SearchListComponent,
	argTypes: {
		onSearchChange: {
			action: 'onSearchChange',
		},
		onSearchItem: {
			action: 'onSearchItem',
		},
		engine: { control: 'select', options: ['fuse', 'custom'] },
	},
} as Meta<typeof SearchListComponent>;

const Template: Story<SearchListPropsType> = (args) => (
	<SearchListComponent {...args} />
);

export const SearchList = Template.bind({});
SearchList.args = {
	list: places,
	search: true,
	loading: false,
	engine: 'fuse',
	title: 'Hello world',
	error: false,
	errorComponent: <>error</>,
	emptyStateText: 'No se encontraron resultados para tu busqueda :(',
	searchPlaceholder: 'Placeholder desde prop en storybook',
	featuredElements: [
		{
			name: 'El Chalten',
			img: 'https://i.ibb.co/FmwQfhS/image2.png',
			id: '2',
			province: 'Santa Cruz',
			category: 'Aventura',
			country: 'Argentina',
			keywords: ['monte', 'ciudad'],
		},
		{
			name: 'El Faro',
			img: 'https://i.ibb.co/HtbgCjG/image.png',
			id: '2',
			province: 'Tierra del Fuego',
			category: 'Navegacion y Aventura',
			country: 'Argentina',
			keywords: ['monte', 'sierras'],
		},
	],
};
