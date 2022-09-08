import React, { useState } from 'react';
import {
	ArrowIconDown,
	SectionContainer,
	SectionTitleContainer,
	SectionTitleMobile,
	SectionDivider,
	LinkStyled,
	SectionLabel,
	ArrowIconUp,
} from './styled';
import { SectionType } from './types';

export const SectionMobile = ({ title, label }: SectionType) => {
	const [openSection, setOpenSection] = useState(false);

	return (
		<SectionContainer onClick={() => setOpenSection(!openSection)}>
			<SectionTitleContainer>
				<SectionTitleMobile>{title}</SectionTitleMobile>
				{openSection ? <ArrowIconUp /> : <ArrowIconDown />}
			</SectionTitleContainer>
			{openSection &&
				label.map((labelItem, index) => (
					<LinkStyled
						href={labelItem.url}
						key={index}
						target={labelItem.target}
					>
						<SectionLabel>{labelItem.label}</SectionLabel>
					</LinkStyled>
				))}
			<SectionDivider />
		</SectionContainer>
	);
};
