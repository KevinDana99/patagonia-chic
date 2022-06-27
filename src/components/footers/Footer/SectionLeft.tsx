import React from 'react';
import Logo from '../../Logo';
import { LeftSection, Language, ImgStyled } from './styled';
import { SectionLeftType } from './types';
import { description } from './utils';

const SectionLeft: React.FC<SectionLeftType> = ({ logo, language }) => {
	return (
		<LeftSection>
			<Logo {...logo} />
			{description.map((item, index) => (
				<p key={index}>{item}</p>
			))}
			<Language>
				<ImgStyled flag={language.flag}></ImgStyled>
				<label>{language.label}</label>
			</Language>
		</LeftSection>
	);
};
// la bandera del idioma es un select?

export default SectionLeft;
