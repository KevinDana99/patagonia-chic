import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PlaceListType } from './types';
import SearchList from '.';

export default {
	title: 'Components/SearchList',
	component: SearchList,
	argTypes: {},
} as Meta<typeof SearchList>;

const Template: Story<PlaceListType> = (args) => <SearchList {...args} />;

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
			name: 'Cordoba 2',
			img: './examples/searchList/images/image.png',
			id: '2',
			province: 'Cordoba',
			country: 'Argentina',
			keywords: ['monte', 'sierras', 'ciudad'],
			featured: true,
		},
		{
			name: 'Cordoba 3',
			img: 'image',
			id: '2',
			province: 'Cordoba',
			country: 'Argentina',
			keywords: ['monte', 'ciudad'],
			featured: false,
		},
		{
			name: 'Cordoba 4',
			img: 'image',
			id: '2',
			province: 'Cordoba',
			country: 'Argentina',
			keywords: ['monte', 'sierras'],
			featured: true,
		},
	],
};
