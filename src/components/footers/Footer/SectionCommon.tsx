import React, { FC } from 'react';
import { ContainerSectionCommon, LinkStyled, Title } from './styled';
import { SectionType } from './types';

const SectionCommon: FC<SectionType> = ({ title, label }) => {
	return (
		<ContainerSectionCommon>
			<Title>{title}</Title>
			{label.map((item, index) => (
				<LinkStyled href={item.url} key={index}>
					<p>{item.label}</p>
				</LinkStyled>
			))}
		</ContainerSectionCommon>
	);
};

export default SectionCommon;
