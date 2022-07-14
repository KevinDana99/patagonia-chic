import React, { FC } from 'react';
import SectionCommon from './SectionCommon';
import SectionLeft from './SectionLeft';
import SectionSocial from './SectionSocial';
import { FooterPropsType } from './types';
import {
	Container,
	ContainerSectionsTop,
	HrDivStyled,
	LinkStyled,
	IconsMovil,
	ContainerIcons,
	ContainerSectionsCommon,
	LanguageMovil,
	ImgStyled,
	LanguageLabel,
} from './styled';
import { icons, sectionList } from './utils';

const Footer: FC<FooterPropsType> = ({ language }) => {
	return (
		<Container>
			<ContainerSectionsTop>
				<SectionLeft logo={{ size: 220 }} language={language} />
				<ContainerSectionsCommon>
					{sectionList?.length &&
						sectionList.map((item, index) => (
							<SectionCommon {...item} key={index} />
						))}
				</ContainerSectionsCommon>

				{/* version movil */}
				<LanguageMovil>
					<ImgStyled flag={language.flag}></ImgStyled>
					<LanguageLabel>{language.label}</LanguageLabel>
				</LanguageMovil>
				{/**/}
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
			<HrDivStyled />

			<SectionSocial />
		</Container>
	);
};

export default Footer;
