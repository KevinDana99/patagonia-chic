import React from 'react';
import { Story, Meta } from '@storybook/react';
import SearchQueryComponent from '.';
import { SearchQueryType } from './types';

export default {
	title: 'Components/queries',
	component: SearchQueryComponent,
	argTypes: {
		onClick: { action: 'clicked' },
	},
} as Meta<typeof SearchQueryComponent>;

const Template: Story<SearchQueryType> = (args) => (
	<SearchQueryComponent {...args} />
);

export const SearchQuery = Template.bind({});
SearchQuery.args = {
	places: [
		{
			name: 'Cordoba',
			img: 'image',
			id: '2',
			province: 'Cordoba',
			country: 'Argentina',
			keywords: ['sierras'],
			featured: false,
		},
		{
			name: 'Cordoba 2',
			img: 'image',
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
		{
			name: 'La chaqueña',
			img: 'image',
			id: '2',
			province: 'Misiones',
			country: 'Argentina',
			keywords: ['ciudad'],
			featured: true,
		},
	],
	onQuerySubmit: (data) => console.log('data', data),
};
