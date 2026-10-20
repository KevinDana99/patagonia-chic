import { FooterTextsType, PlaceType, SocialNetworks } from './types';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';

export const getSectionList = (places: [PlaceType], texts: FooterTextsType) => {
	return [
		{
			title: texts.helpTitle,
			label: [
				{
					label: texts.helpCenterLabel,
					url: 'https://www.patagoniachic.com/contacto/',
				},
				{
					label: texts.cancellationPolicesLabel,
					url: '', // TO DO: add cancelation polices
				},
				{
					label: texts.termsAndConditionsLabel,
					url: 'https://www.patagoniachic.com/terminos-y-condiciones/',
					target: '_blank',
				},
			],
		},
		{
			title: texts.destinyTitle,
			label: places,
		},
		{
			title: texts.usefulLinks,
			label: [
				{
					label: texts.paymentMethodsAndPromotions,
					url: 'https://www.patagoniachic.com/medios-de-pago/',
				},
				{
					label: texts.excursionMap,
					url: 'https://www.patagoniachic.com/mapa-excursiones/',
				},
				{
					label: texts.about,
					url: 'https://www.patagoniachic.com/quienes-somos/',
				},
				{
					label: texts.downloadExcursionCatalog,
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
