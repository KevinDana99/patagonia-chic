import React, { FC } from 'react';
import { SectionCopyrightsAndSocial } from './types';
import { ContainerSocial, CopyrightStyled, IconContainer } from './styled';

const SectionSocial: FC<SectionCopyrightsAndSocial> = ({ label, Icons }) => {
	return (
		<ContainerSocial>
			<CopyrightStyled>{label}</CopyrightStyled>
			<IconContainer>
				{Icons.map((Icon, index) => (
					<Icon key={index} />
				))}
			</IconContainer>
		</ContainerSocial>
	);
};

export default SectionSocial;
