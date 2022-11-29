import React from 'react';
import Logo from '../../../logos/Logo/index';
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
import { SectionLeftType } from '../types';
import Text from '../../../texts/Text/index';
import { Accordion } from '../../../index';

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
					{(isMobile || isTablet) && <Accordion sections={sections} />}
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
