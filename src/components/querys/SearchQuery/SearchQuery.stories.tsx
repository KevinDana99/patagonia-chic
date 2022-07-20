import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SearchQuery } from './index';
import { SearchQueryType } from './types';

export default {
	title: 'Components/SearchQuery',
	component: SearchQuery,
	argTypes: {
		onClick: { action: 'clicked' },
	},
} as Meta<typeof SearchQuery>;

const Template: Story<SearchQueryType> = (args) => <SearchQuery {...args} />;

export const Query = Template.bind({});
Query.args = {
	places: [
		{
			name: 'Cordoba',
			img: 'image',
			id: '2',
			province: 'Cordoba',
			country: 'Argentina',
		},
		{
			name: 'Cordoba 2',
			img: 'image',
			id: '2',
			province: 'Cordoba',
			country: 'Argentina',
		},
		{
			name: 'Cordoba 3',
			img: 'image',
			id: '2',
			province: 'Cordoba',
			country: 'Argentina',
		},
		{
			name: 'Cordoba 4',
			img: 'image',
			id: '2',
			province: 'Cordoba',
			country: 'Argentina',
		},
		{
			name: 'La chaqueña',
			img: 'image',
			id: '2',
			province: 'Misiones',
			country: 'Argentina',
		},
	],
	onQuerySubmit: (data) => console.log('data', data),
};
