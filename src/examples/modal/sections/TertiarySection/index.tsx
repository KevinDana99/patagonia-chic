import React, { FC } from 'react';
import { Section, BoxIcon } from './styled';
import { tertiarySectionType } from './type';
const TertiarySectionModal: FC<tertiarySectionType> = ({
	iconSelector,
	description,
}) => {
	return (
		<Section>
			<BoxIcon>
				<iconSelector.Icon color={iconSelector.color} />
			</BoxIcon>
			<div>{description}</div>
		</Section>
	);
};

export default TertiarySectionModal;
