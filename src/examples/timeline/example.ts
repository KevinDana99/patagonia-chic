import { IoCheckmarkCircle } from 'react-icons/io5';
import { TbPlayerEject } from 'react-icons/tb';

const theme = '#3BC053';

export default [
	{
		title: 'Reserva obtenida',
		secondaryTitle: '28 Junio - 10:00 a.m.',
		tertiaryTitle: {
			options: { price: '$ 22.000', currency: 'Ars' },
			link: 'https://www.google.com.ar',
		},
		active: false,
	},

	{
		title: 'Reserva obtenida',
		secondaryTitle: '28 Junio - 10:00 a.m.',
		tertiaryTitle: {
			options: {
				price: '$ 22.000',
				currency: 'Ars',
				clear: () => console.log('reserva cancelada'),
			},
			link: 'https://www.google.com.ar',
		},
		active: true,
	},

	{
		title: 'Reserva obtenida',
		secondaryTitle: '28 Junio - 10:00 a.m.',
		tertiaryTitle: {
			options: { price: '$ 22.000', currency: 'Ars' },
			link: 'https://www.google.com.ar',
		},
		active: false,
	},
];
