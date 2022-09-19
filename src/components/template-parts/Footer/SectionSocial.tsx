import React from 'react';
import Text from '../../texts/Text';
import {
	ContainerSocial,
	CopyrightText,
	IconContainer,
	LinkStyled,
} from './styled';
import { FooterSectionSocialType } from './types';
import { icons } from './utils';

export const SectionSocial = ({ footerTexts }: FooterSectionSocialType) => {
	return (
		<ContainerSocial>
			<CopyrightText>
				<Text>{footerTexts.copyrightMessage}</Text>
			</CopyrightText>
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
