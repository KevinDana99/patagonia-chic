import React from 'react';
import Logo from '../../Logo';
import {
	LeftSection,
	Language,
	LanguageLabel,
	Description,
	Direction,
	WorldIcon,
	SocialMobileContainer,
	LeftSideContainer,
	DescriptionContainer,
} from './styled';
import { SectionLeftType, SectionType } from './types';
import { footerTexts } from './footerTexts';
import { SectionMobile } from './SectionMobile';

const SectionLeft = ({
	logo,
	language,
	isMobile,
	sections,
	isTablet,
}: SectionLeftType) => {
	return (
		<LeftSection>
			<LeftSideContainer>
				<DescriptionContainer>
					<Logo {...logo} />
					<Description>{footerTexts.description}</Description>
					<Direction>{footerTexts.direction}</Direction>
				</DescriptionContainer>

				<SocialMobileContainer>
					{isTablet || isMobile
						? sections.map((section: SectionType, index: number) => (
								<SectionMobile {...section} key={index} />
						  ))
						: null}
				</SocialMobileContainer>
			</LeftSideContainer>
			<Language>
				<WorldIcon />
				<LanguageLabel>{`${language.label} - ${language.symbol} ${language.currency}`}</LanguageLabel>
			</Language>
		</LeftSection>
	);
};

export default SectionLeft;
