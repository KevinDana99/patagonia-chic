import React, { FC } from 'react';
import {
	ContainerSocial,
	CopyrightStyled,
	IconContainer,
	LinkStyled,
} from './styled';
import { Icons } from './utils';

const SectionSocial: FC = () => {
	return (
		<ContainerSocial>
			<CopyrightStyled>
				©Copyrights 2022 - PatagoniaChic.com EVT Leg. 15.528, Disp. 1795/14
			</CopyrightStyled>
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
