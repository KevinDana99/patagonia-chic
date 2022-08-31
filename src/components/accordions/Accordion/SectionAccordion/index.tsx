import React, { useState } from 'react';
import { withFontStyles } from '../../../../helpers/hocs/withFontStyles';

import {
	ArrowIconDown,
	SectionContainer,
	SectionTitleContainer,
	SectionTitle,
	SectionDivider,
	LinkStyled,
	SectionLabel,
	ArrowIconUp,
} from './styled';
import { SectionType } from './types';

export const Section = ({ title, label, content }: SectionType) => {
	const [openSection, setOpenSection] = useState(false);

	return (
		<SectionContainer onClick={() => setOpenSection(!openSection)}>
			<SectionTitleContainer>
				<SectionTitle>{title}</SectionTitle>
				{openSection ? <ArrowIconUp /> : <ArrowIconDown />}
			</SectionTitleContainer>
			{openSection &&
				label &&
				label.map((labelItem, index) => (
					<LinkStyled
						href={labelItem.url}
						key={index}
						target={labelItem.target}
					>
						<SectionLabel>{labelItem.label}</SectionLabel>
					</LinkStyled>
				))}

			{openSection && content && content}
			<SectionDivider />
		</SectionContainer>
	);
};

const SectionAccordion = withFontStyles(Section);

export default SectionAccordion;
