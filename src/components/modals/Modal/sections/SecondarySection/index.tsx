import React, { FC } from 'react';
import { Section, BoxIcon } from './styled';
import { secondarySectionType } from './type';
const SecondarySectionModal: FC<secondarySectionType> = ({
	icon,
	description,
}) => {
	return (
		<Section>
			<BoxIcon>
				<div>{icon}</div>
			</BoxIcon>
			<div>{description}</div>
		</Section>
	);
};

export default SecondarySectionModal;
