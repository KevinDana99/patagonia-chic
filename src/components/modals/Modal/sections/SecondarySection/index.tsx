import React, { FC } from 'react';
import { Section, BoxIcon } from './styled';
import { secondarySectionType } from './type';
const SecondarySectionModal: FC<secondarySectionType> = ({
	iconSelector,
	description,
	track,
}) => {
	return (
		<Section id={track}>
			<BoxIcon>
				<iconSelector.Icon color={iconSelector.color} />
			</BoxIcon>
			<div>{description}</div>
		</Section>
	);
};

export default SecondarySectionModal;
