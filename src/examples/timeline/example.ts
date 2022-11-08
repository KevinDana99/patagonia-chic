import { IoCheckmarkCircle } from 'react-icons/io5';
import { TbPlayerEject } from 'react-icons/tb';

export default [
	{
		id: 1,
		title: 'Reserva obtenida',
		dateTime: new Date('2022/10/1 3:30'),
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
		dateTime: new Date('2022/12/31 23:30'),
		secondaryTitle: '28 Junio - 10:00 a.m.',
		tertiaryTitle: {
			options: { price: '$ 22.000', currency: 'Ars' },
			link: 'https://www.google.com.ar',
		},
		active: true,
	},
];
