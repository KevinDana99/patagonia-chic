import React from 'react';
import { footerTexts } from './footerTexts';
import {
	ContainerSocial,
	CopyrightText,
	IconContainer,
	LinkStyled,
} from './styled';
import { icons } from './utils';

export const SectionSocial = () => {
	return (
		<ContainerSocial>
			<CopyrightText>{footerTexts.copyrightMessage}</CopyrightText>
			<IconContainer>
				{icons.map(({ Icon, url }, index) => (
					<LinkStyled href={url} key={index} target="_blank">
						<Icon style={{ fontSize: '1.4rem' }} />
					</LinkStyled>
				))}
			</IconContainer>
		</ContainerSocial>
	);
};
