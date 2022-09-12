import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ListType } from './types';
import SearchListComponent from '.';
import places from '../../../examples/values/places.json';

export default {
	title: 'Components/lists',
	component: SearchListComponent,
	argTypes: {
		onSearchChange: {
			action: 'onSearchChange',
		},
		engine: { control: 'select', options: ['fuse', 'custom'] },
	},
} as Meta<typeof SearchListComponent>;

const Template: Story<ListType> = (args) => <SearchListComponent {...args} />;

export const SearchList = Template.bind({});
SearchList.args = {
	list: places,
	search: true,
	loading: false,
	engine: 'fuse',
	title: 'Hello world',
	error: true,
	errorComponent: <>error</>,
	emptyStateText: 'El campo de busqueda se encuentra vacio',
	emptyStateComponent: <>El campo esta vacio</>,
};
