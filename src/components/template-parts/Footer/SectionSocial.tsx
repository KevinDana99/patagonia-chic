import React from 'react';
import {
	ContainerSocial,
	CopyrightText,
	IconContainer,
	LinkStyled,
} from './styled';
import { SectionSocialType } from './types';
import { icons } from './utils';

export const SectionSocial = ({ texts }: SectionSocialType) => {
	return (
		<ContainerSocial>
			<CopyrightText>{texts.copyrightMessage}</CopyrightText>
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
