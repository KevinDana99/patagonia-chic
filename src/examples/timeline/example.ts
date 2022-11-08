import { IoCheckmarkCircle } from 'react-icons/io5';
import { TbPlayerEject } from 'react-icons/tb';

export default [
	{
		id: 1,
		title: 'Reserva obtenida',
		dateTime: new Date(2022, 9, 31),
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
		dateTime: new Date(2022, 11, 5),
		secondaryTitle: '28 Junio - 10:00 a.m.',
		tertiaryTitle: {
			options: { price: '$ 22.000', currency: 'Ars' },
			link: 'https://www.google.com.ar',
		},
		active: true,
	},
];
