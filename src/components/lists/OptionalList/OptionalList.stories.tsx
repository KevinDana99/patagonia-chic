import React from 'react';
import { Story, Meta } from '@storybook/react';
import OptionalListComponent from '.';
import { OptionalsListType } from './types';

export default {
	title: 'Components/lists',
	component: OptionalListComponent,
	argTypes: {},
} as Meta<typeof OptionalListComponent>;

const Template: Story<OptionalsListType> = (args) => (
	<OptionalListComponent {...args} />
);

export const OptionalList = Template.bind({});
OptionalList.args = {
	list: [
		{
			id: 1,
			title: 'Tocá el glaciar + Navegación',
			description:
				'Acercamiento al glaciar que permite tocar el hielo con las manos.',
			price: '$ 11.000 ARS',
			priceDescription: 'Por adulto',
			disabled: false,
			onClickInformation: () => console.log('onClickInformation'),
			showCounterSelect: true,
			moreInformationContent: (
				<div>
					Sandwich en pan casero de pollo a las hierbas desmenuzado con untable
					de queso crema y tomates disecados tomate huevo duro y queso en fetas.
				</div>
			),
		},
		{
			id: 2,
			title: 'Tocá el glaciar + Navegación',
			description:
				'Acercamiento al glaciar que permite tocar el hielo con las manos.',
			price: '$ 11.000 ARS',
			disabled: false,
			onClickInformation: () => console.log('onClickInformation'),
		},
		{
			id: 3,
			title: 'Tocá el glaciar + Navegación',
			price: '$ 11.000 ARS',
			priceDescription: 'Por adulto',
			disabled: false,
			onClickInformation: () => console.log('onClickInformation'),
		},
		{
			id: 4,
			title: 'Tocá el glaciar + Navegación',
			price: '$ 11.000 ARS',
			onClickInformation: () => console.log('onClickInformation'),
		},
		{
			id: 5,
			title: 'Sin navegación',
			resetList: true,
		},
		{
			id: 6,
			title: 'Tocá el glaciar + Navegación',
			description:
				'Acercamiento al glaciar que permite tocar el hielo con las manos.',
			price: '$ 11.000 ARS',
			priceDescription: 'Por adulto',
			disabled: true,
			onClickInformation: () => console.log('onClickInformation'),
		},
	],
	texts: {
		moreInformation: 'Más información',
		hideInformation: 'Ocultar',
		selectQuantity: 'Seleccionar cantidad',
	},
	optionalType: 'radio',
	onSelectedChange: (list) => console.log(list),
};
