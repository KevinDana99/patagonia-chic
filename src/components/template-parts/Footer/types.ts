import { LogoType } from '../../logos/Logo/types';
import { IconType } from 'react-icons';

export type LanguageType = {
	label: string;
	symbol?: string;
	currency?: string;
};

export type SectionLeftType = {
	logo: LogoType;
	language: LanguageType;
	isMobile: boolean;
	sections: {
		title: string;
		label: (
			| { label: string; url: string; target?: undefined }
			| { label: string; url: string; target: string }
		)[];
	}[];
	isTablet: boolean;
	texts: FooterTextsType;
	devMode: StyleDevModeType['devMode'];
	onClickLogo: () => void;
};

export type LabelLinkType = {
	label: string;
	url: string;
	target?: string;
};

export type SectionType = {
	title: string;
	label: LabelLinkType[];
	devMode: StyleDevModeType['devMode'];
};

export type SocialNetworks = {
	url: string;
	Icon: IconType;
};

export type PlaceType = {
	label: string;
	url: string;
};

export type FooterPropsType = {
	language: LanguageType;
	places: [PlaceType];
	texts: FooterTextsType;
	devMode: boolean;
	onClickLogo: () => void;
};

export type FooterTextsType = {
	description: string;
	direction: string;
	copyrightMessage: string;
	helpCenterLabel: string;
	cancellationPolicesLabel: string;
	termsAndConditionsLabel: string;
	helpTitle: string;
	destinyTitle: string;
	usefulLinks: string;
	paymentMethodsAndPromotions: string;
	excursionMap: string;
	about: string;
	downloadExcursionCatalog: string;
};

export type SectionSocialType = {
	texts: FooterTextsType;
	devMode: StyleDevModeType['devMode'];
};
export interface SectionInterface {
	sections: {
		title: string;
		label: (
			| { label: string; url: string; target?: undefined }
			| { label: string; url: string; target: string }
		)[];
	}[];
}

export type SectionMobileType = {
	sections: {
		title: string;
		label: (
			| { label: string; url: string; target?: undefined }
			| { label: string; url: string; target: string }
		)[];
	}[];
};

export type StyleDevModeType = {
	devMode?: boolean;
};
