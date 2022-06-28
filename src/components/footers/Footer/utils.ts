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
				url: 'https://www.patagoniachic.com/terminos-y-condiciones/',
				target: '_blank',
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
				url: 'https://www.patagoniachic.com/medios-de-pago/',
			},
			{
				label: 'Mapa de excursiones',
				url: 'https://www.patagoniachic.com/mapa-excursiones/',
			},
			{
				label: 'Quienes somos',
				url: 'https://www.patagoniachic.com/quienes-somos/',
			},
			{
				label: 'Descargue gratis catalogo de excursiones',
				url: 'https://www.patagoniachic.com/el-calafate/excursiones/catalogo-de-excursiones/',
			},
		],
	},
];

export const icons: SocialNetworks[] = [
	{
		Icon: AiFillInstagram,
		url: 'https://www.instagram.com/patagoniachic_oficial/?hl=es',
	},
	{ Icon: FaFacebookF, url: 'https://www.facebook.com/patagoniachic/' },
	{
		Icon: AiFillYoutube,
		url: 'https://www.youtube.com/c/Patagoniachic-Excursiones-El-Calafate/featured?app=desktop',
	},
];

export const description: string[] = [
	'Tenemos la excursion perfecta para vos en El Calafate. Reserva al mejor precio y de forma fácil',
	'Av. del Libertador 932, Z9405 El Calafate, Santa Cruz',
];
