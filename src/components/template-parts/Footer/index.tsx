import React from 'react';
import SectionCommon from './SectionCommon';
import SectionLeft from './SectionLeft';
import { FooterPropsType } from './types';
import {
	Container,
	ContainerSectionsTop,
	LinkStyled,
	IconsMovil,
	ContainerIcons,
	ContainerSectionsCommon,
	Divider,
} from './styled';
import { icons } from './utils';
import { deviceSize } from '../../../constants/devicesSizes';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { SectionSocial } from './SectionSocial';

const Footer = ({ language, footerTexts, sections }: FooterPropsType) => {
	const isMobile = useMediaQuery(deviceSize.mobileL);
	const isTablet = useMediaQuery(deviceSize.tablet);

	return (
		<Container>
			<ContainerSectionsTop>
				<SectionLeft
					logo={{ size: 220 }}
					language={language}
					sections={sections}
					isMobile={isMobile}
					isTablet={isTablet}
					footerTexts={footerTexts}
				/>
				<ContainerSectionsCommon>
					{sections.map((item, index) => (
						<SectionCommon {...item} key={index} />
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
			<SectionSocial footerTexts={footerTexts} />
		</Container>
	);
};

export default Footer;
