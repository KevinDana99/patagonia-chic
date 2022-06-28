import React from 'react';
import Logo from '../../Logo';
import { LeftSection, Language, ImgStyled, LanguageLabel } from './styled';
import { SectionLeftType } from './types';
import { description } from './utils';

const SectionLeft: React.FC<SectionLeftType> = ({
	logo,
	language,
	backgroundColorLanguage,
}) => {
	return (
		<LeftSection>
			<Logo {...logo} />
			{description.map((item, index) => (
				<p key={index}>{item}</p>
			))}
			<Language backgroundColorLanguage={backgroundColorLanguage}>
				<ImgStyled flag={language.flag}></ImgStyled>
				<LanguageLabel>{language.label}</LanguageLabel>
			</Language>
		</LeftSection>
	);
};
// la bandera del idioma es un select?

export default SectionLeft;
