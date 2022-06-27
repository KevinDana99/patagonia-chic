import { LogoType } from '../../Logo/types';
import { IconType } from 'react-icons';

export type LanguageType = {
	flag: string;
	label: string;
	value?: string;
};

export type SectionLeftType = {
	logo: LogoType;
	description: string[];
	language: LanguageType[];
};

export type LabelLinkType = {
	label: string;
	url: string;
};

export type SectionType = {
	title: string;
	label: LabelLinkType[];
};

export type SectionCopyrightsAndSocial = {
	label: string;
	Icons: IconType[];
};

export type FooterPropsType = {
	leftList: SectionLeftType;
	sectionList?: SectionType[];
	sectionBottom: SectionCopyrightsAndSocial;
	backgroundColor?: string;
	color?: string;
};
