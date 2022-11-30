import React from 'react';
import SectionCommon from './SectionCommon/SectionCommon';
import SectionLeft from './SectionLeft/SectionLeft';
import { FooterPropsType } from './types';
import {
	Container,
	ContainerSectionsTop,
	LinkStyled,
	IconsMovil,
	ContainerIcons,
	ContainerSectionsCommon,
	Divider,
	Wrapper,
} from './styled';
import { getSectionList, icons } from './utils';
import { deviceSize } from '../../../constants/devicesSizes';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { SectionSocial } from './SectionSocial/SectionSocial';
import { Accordion } from '../../index';

const Footer = ({ language, places, texts, devMode }: FooterPropsType) => {
	const isMobile = useMediaQuery(deviceSize.mobile);
	const isTablet = useMediaQuery(deviceSize.tablet);

	const sections = getSectionList(places, texts);

	return (
		<Container>
			<Wrapper>
				<ContainerSectionsTop devMode={devMode}>
					<SectionLeft
						devMode={devMode}
						logo={{ size: 220 }}
						language={language}
						sections={sections}
						isMobile={isMobile}
						isTablet={isTablet}
						texts={texts}
					/>
					<ContainerSectionsCommon devMode={devMode}>
						{sections.map((item, index) => (
							<SectionCommon {...item} key={index} devMode={devMode} />
						))}
					</ContainerSectionsCommon>
				</ContainerSectionsTop>
				<ContainerIcons>
					<IconsMovil>
						{icons.map(({ Icon, url }, index) => (
							<LinkStyled href={url} key={index} target="_blank">
								<Icon style={{ fontSize: '1.4rem' }} />
							</LinkStyled>
						))}
					</IconsMovil>
				</ContainerIcons>
				<Divider />
				<SectionSocial texts={texts} devMode={devMode} />
			</Wrapper>
		</Container>
	);
};

export default Footer;
