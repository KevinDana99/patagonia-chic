import React from 'react';
import {
	ContainerSectionCommon,
	LinkStyled,
	DesktopSectionCommon,
	SectionLabel,
	SectionTitle,
} from './styled';
import { SectionType } from './types';

const SectionCommon = ({ title, label }: SectionType) => {
	return (
		<ContainerSectionCommon>
			<DesktopSectionCommon>
				<SectionTitle>{title}</SectionTitle>
				{label.map((item, index) => (
					<LinkStyled href={item.url} key={index} target={item.target}>
						<SectionLabel>{item.label}</SectionLabel>
					</LinkStyled>
				))}
			</DesktopSectionCommon>
		</ContainerSectionCommon>
	);
};

export default SectionCommon;
