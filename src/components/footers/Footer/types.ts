import { LogoType } from '../../Logo/types';
import { IconType } from 'react-icons';

export type LanguageType = {
	flag: string;
	label: string;
	value?: string;
};

export type SectionLeftType = {
	logo: LogoType;
	language: LanguageType;
};

export type LabelLinkType = {
	label: string;
	url: string;
	target?: string;
};

export type SectionType = {
	title: string;
	label: LabelLinkType[];
};

export type SocialNetworks = {
	url: string;
	Icon: IconType;
};

export type FooterPropsType = {
	language: LanguageType;
};
