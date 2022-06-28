import React, { FC } from 'react';
import SectionCommon from './SectionCommon';
import SectionLeft from './SectionLeft';
import SectionSocial from './SectionSocial';
import { FooterPropsType } from './types';
import {
	Container,
	ContainerSectionsTop,
	HrStyled,
	LinkStyled,
	IconsMovil,
	ContainerIcons,
} from './styled';
import { icons, sectionList } from './utils';

const Footer: FC<FooterPropsType> = ({
	language,
	backgroundColor,
	color,
	colorDivision,
	backgroundColorLanguage,
}) => {
	return (
		<Container backgroundColor={backgroundColor} color={color}>
			<ContainerSectionsTop>
				<SectionLeft
					logo={{ size: 220 }}
					language={language}
					backgroundColorLanguage={backgroundColorLanguage}
				/>

				{sectionList?.length &&
					sectionList.map((item, index) => (
						<SectionCommon {...item} key={index} />
					))}
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
			<HrStyled colorDivision={colorDivision} />

			<SectionSocial />
		</Container>
	);
};

export default Footer;
