import React, { FC } from 'react';
import SectionCommon from './SectionCommon';
import SectionLeft from './SectionLeft';
import SectionSocial from './SectionSocial';
import { FooterPropsType } from './types';
import { Container, ContainerSectionsTop, ContainerSocial } from './styled';

const Footer: FC<FooterPropsType> = ({
	leftList,
	sectionList,
	sectionBottom,
	backgroundColor,
	color,
}) => {
	return (
		<Container backgroundColor={backgroundColor} color={color}>
			<ContainerSectionsTop>
				<SectionLeft {...leftList} />

				{sectionList?.length &&
					sectionList.map((item, index) => (
						<SectionCommon {...item} key={index} />
					))}
			</ContainerSectionsTop>
			<hr />

			<SectionSocial {...sectionBottom} />
		</Container>
	);
};

export default Footer;
