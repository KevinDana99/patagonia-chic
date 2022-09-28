import { IoCheckmarkCircle } from 'react-icons/io5';
import { TbPlayerEject } from 'react-icons/tb';

const theme = '#3BC053';

export default [
	{
		id: 1,
		title: 'Reserva obtenida',
		secondaryTitle: '28 Junio - 10:00 a.m.',
		tertiaryTitle: {
			options: { price: '$ 22.000', currency: 'Ars' },
			link: 'https://www.google.com.ar',
		},
		active: true,
	},

	{
		id: 2,
		title: 'Reserva obtenida',
		secondaryTitle: '28 Junio - 10:00 a.m.',
		tertiaryTitle: {
			options: {
				price: '$ 22.000',
				currency: 'Ars',
			},
			link: 'https://www.google.com.ar',
		},
		active: true,
	},

	{
		id: 3,
		title: 'Reserva obtenida',
		secondaryTitle: '28 Junio - 10:00 a.m.',
		tertiaryTitle: {
			options: { price: '$ 22.000', currency: 'Ars' },
			link: 'https://www.google.com.ar',
		},
		active: false,
	},
];
