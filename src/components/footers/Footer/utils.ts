import { SectionType, SocialNetworks } from './types';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';

export const sectionList: SectionType[] = [
	{
		title: 'Ayuda',
		label: [
			{
				label: 'Centro de ayuda',
				url: '',
			},
			{
				label: 'Política de cancelación',
				url: '',
			},
			{
				label: 'Términos y condiciones',
				url: '',
			},
		],
	},
	{
		title: 'Destino',
		label: [
			{
				label: 'El Calafate',
				url: '',
			},
		],
	},
	{
		title: 'Enlaces útiles',
		label: [
			{
				label: 'Medios de pago y promociones',
				url: '',
			},
			{
				label: 'Mapa de excursiones',
				url: '',
			},
			{
				label: 'Quienes somos',
				url: '',
			},
			{
				label: 'Descargue gratis catalogo de excursiones',
				url: '',
			},
		],
	},
];

export const Icons: SocialNetworks[] = [
	{ Icon: FaFacebookF, url: '' },
	{ Icon: AiFillInstagram, url: '' },
	{ Icon: AiFillYoutube, url: '' },
];

export const description: string[] = [
	'Tenemos la excursion perfecta para vos en El Calafate. Reserva al mejor precio y de forma fácil',
	'Av. del Libertador 932, Z9405 El Calafate, Santa Cruz',
];
