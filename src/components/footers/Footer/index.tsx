import React, { FC } from 'react';
import SectionCommon from './SectionCommon';
import SectionLeft from './SectionLeft';
import SectionSocial from './SectionSocial';
import { FooterPropsType } from './types';
import { Container, ContainerSectionsTop, HrStyled } from './styled';
import { sectionList } from './utils';

const Footer: FC<FooterPropsType> = ({
	language,
	backgroundColor,
	color,
	colorDivision,
}) => {
	return (
		<Container backgroundColor={backgroundColor} color={color}>
			<ContainerSectionsTop>
				<SectionLeft logo={{ size: 300 }} language={language} />

				{sectionList?.length &&
					sectionList.map((item, index) => (
						<SectionCommon {...item} key={index} />
					))}
			</ContainerSectionsTop>
			<HrStyled colorDivision={colorDivision} />

			<SectionSocial />
		</Container>
	);
};

export default Footer;
