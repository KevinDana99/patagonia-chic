import React, { FC } from 'react';
import { Section, Subtitle, Title, Linking } from './styled';
import { primarySectionType } from './type';

const PrimarySectionModal: FC<primarySectionType> = ({
	title,
	subtitle,
	path,
}) => {
	return (
		<Section>
			<Linking href={`#${path}`}>
				<Title>{title}</Title>
			</Linking>
			<Subtitle>{subtitle}</Subtitle>
		</Section>
	);
};

export default PrimarySectionModal;
