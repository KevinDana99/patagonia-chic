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
} from './styled';
import { getSectionList, icons } from './utils';
import { deviceSize } from '../../../constants/devicesSizes';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { SectionSocial } from './SectionSocial/SectionSocial';

const Footer = ({ language, places, texts }: FooterPropsType) => {
	const isMobile = useMediaQuery(deviceSize.mobile);
	const isTablet = useMediaQuery(deviceSize.tablet);

	const sections = getSectionList(places, texts);

	return (
		<Container>
			<ContainerSectionsTop>
				<SectionLeft
					logo={{ size: 220 }}
					language={language}
					sections={sections}
					isMobile={isMobile}
					isTablet={isTablet}
					texts={texts}
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
			<SectionSocial texts={texts} />
		</Container>
	);
};

export default Footer;
