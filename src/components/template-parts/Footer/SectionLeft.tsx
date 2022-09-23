import React from 'react';
import Logo from '../../logos/Logo';
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
import { SectionMobile } from './SectionMobile';
import Text from '../../texts/Text';

const SectionLeft = ({
	logo,
	language,
	isMobile,
	sections,
	isTablet,
	texts,
}: SectionLeftType) => {
	return (
		<LeftSection>
			<LeftSideContainer>
				<DescriptionContainer>
					<Logo {...logo} />
					<Description>
						<Text>{texts.description}</Text>
					</Description>
					<Direction>
						<Text>{texts.direction}</Text>
					</Direction>
				</DescriptionContainer>

				<SocialMobileContainer>
					{isTablet || isMobile ? <SectionMobile sections={sections} /> : null}
				</SocialMobileContainer>
			</LeftSideContainer>
			<Language>
				<WorldIcon />
				<LanguageLabel>
					<Text size={14} weight={'semi-bold'}>
						{`${language.label} - ${language.symbol} ${language.currency}`}
					</Text>
				</LanguageLabel>
			</Language>
		</LeftSection>
	);
};

export default SectionLeft;
