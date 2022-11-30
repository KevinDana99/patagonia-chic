import React from 'react';
import Text from '../../../texts/Text/index';
import { LinkStyled } from '../styled';
import { ContainerSocial, CopyrightText, IconContainer } from './styled';
import { SectionSocialType } from '../types';
import { icons } from '../utils';

export const SectionSocial = ({ texts, devMode }: SectionSocialType) => {
	return (
		<ContainerSocial devMode={devMode}>
			<CopyrightText>
				<Text>{texts.copyrightMessage}</Text>
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
