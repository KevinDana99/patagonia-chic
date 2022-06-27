import React from 'react';
import Logo from '../../Logo';
import { LeftSection, Language } from './styled';
import { SectionLeftType } from './types';

const SectionLeft: React.FC<SectionLeftType> = ({
	logo,
	description,
	language,
}) => {
	return (
		<LeftSection>
			<Logo {...logo} />
			{description.map((item, index) => (
				<p key={index}>{item}</p>
			))}

			{language.map((item) => (
				<Language key={item.label}>
					<img src={item.flag} alt={item.label} width="60px" />
					<label>{item.label}</label>
				</Language>
			))}
		</LeftSection>
	);
};
// la bandera del idioma es un select?

export default SectionLeft;
