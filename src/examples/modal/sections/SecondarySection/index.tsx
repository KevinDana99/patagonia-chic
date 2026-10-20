import React, { FC } from 'react';
import { Section, Title } from './styled';
import { secondarySectionType } from './type';
const SecondarySectionModal: FC<secondarySectionType> = ({
	title,
	description,
	track,
}) => {
	return (
		<Section id={track}>
			<Title>{title}</Title>
			<div>{description}</div>
		</Section>
	);
};

export default SecondarySectionModal;
