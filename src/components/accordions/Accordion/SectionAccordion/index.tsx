import React, { useState } from 'react';
import Text from '../../../texts/Text';

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

export const SectionAccordion = ({ title, label, content }: SectionType) => {
	const [openSection, setOpenSection] = useState(false);

	return (
		<SectionContainer onClick={() => setOpenSection(!openSection)}>
			<SectionTitleContainer>
				<SectionTitle>
					<Text weight={'medium'} size={18}>
						{title}
					</Text>
				</SectionTitle>
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
						<SectionLabel>
							<Text size={15}>{labelItem.label}</Text>
						</SectionLabel>
					</LinkStyled>
				))}

			{openSection && content && content}
			<SectionDivider />
		</SectionContainer>
	);
};

export default SectionAccordion;
