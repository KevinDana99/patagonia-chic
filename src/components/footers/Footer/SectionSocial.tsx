import React, { FC } from 'react';
import { SectionCopyrightsAndSocial } from './types';
import {
	ContainerSocial,
	CopyrightStyled,
	IconContainer,
	LinkStyled,
} from './styled';

const SectionSocial: FC<SectionCopyrightsAndSocial> = ({ label, Icons }) => {
	return (
		<ContainerSocial>
			<CopyrightStyled>{label}</CopyrightStyled>
			<IconContainer>
				{Icons.map(({ Icon, url }, index) => (
					<LinkStyled href={url} key={index}>
						<Icon />
					</LinkStyled>
				))}
			</IconContainer>
		</ContainerSocial>
	);
};

export default SectionSocial;
