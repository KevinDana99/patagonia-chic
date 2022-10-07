import React from 'react';
import { Story, Meta } from '@storybook/react';
import SearchQueryComponent from '.';
import { SearchQueryPropsType } from './types';
import places from '../../../examples/values/places.json';
export default {
	title: 'Components/queries',
	component: SearchQueryComponent,
	argTypes: {
		onClick: { action: 'clicked' },
	},
} as Meta<typeof SearchQueryComponent>;

const Template: Story<SearchQueryPropsType> = (args) => (
	<>
		<SearchQueryComponent {...args} />
	</>
);

export const SearchQuery = Template.bind({});
SearchQuery.args = {
	locationsList: places,
	onQuerySubmit: (query) => console.log(query),
	texts: {
		placeholderPlace: '¿A dónde vas?',
		labelPlace: 'Lugar',
		placeholderDate: 'Seleccione fecha',
		labelStartDate: 'Fecha de llegada',
		labelEndDate: 'Fecha de partida',
		titleSearchButton: 'Buscar Excursiones',
	},
};
