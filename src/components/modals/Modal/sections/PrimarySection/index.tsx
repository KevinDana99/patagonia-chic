import React, { FC } from 'react';
import { Section, Subtitle, Title } from './styled';
import { primarySectionType } from './type';

const PrimarySectionModal: FC<primarySectionType> = ({ title, subtitle }) => {
	return (
		<Section>
			<Title>{title}</Title>
			<Subtitle>{subtitle}</Subtitle>
		</Section>
	);
};

export default PrimarySectionModal;
