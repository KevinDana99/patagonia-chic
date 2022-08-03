import { PlaceType, SocialNetworks } from './types';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import { footerTexts } from './footerTexts';

export const getSectionList = (places: [PlaceType]) => {
	return [
		{
			title: 'Ayuda',
			label: [
				{
					label: footerTexts.helpCenterLabel,
					url: 'https://www.patagoniachic.com/contacto/',
				},
				{
					label: footerTexts.cancellationPolicesLabel,
					url: '', // TO DO: add cancelation polices
				},
				{
					label: footerTexts.termsAndConditionsLabel,
					url: 'https://www.patagoniachic.com/terminos-y-condiciones/',
					target: '_blank',
				},
			],
		},
		{
			title: 'Destino',
			label: places,
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
};

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
