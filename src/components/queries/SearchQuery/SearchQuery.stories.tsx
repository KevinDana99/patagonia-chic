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
		onQuerySubmit: { action: 'submitted' },
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
	texts: {
		placeholderLocation: '¿A dónde vas?',
		labelLocation: 'Lugar',
		placeholderDate: 'Seleccione fecha',
		labelStartDate: 'Fecha de llegada',
		labelEndDate: 'Fecha de partida',
		modalLabelLocation: 'Lugar',
		modalLabelStartDate: 'Llegada',
		modalLabelEndDate: 'Partida',
		titleSearchButton: 'Buscar Excursiones',
		dateAvailableReference: 'disponible',
		emptyStateText:
			'No se enconntraron resultados para <b>"{{queryText}}"</b>.',
	},
};
