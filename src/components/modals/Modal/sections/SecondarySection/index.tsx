import React, { FC } from 'react';
import { Section, BoxIcon } from './styled';
import { secondarySectionType } from './type';
const SecondarySectionModal: FC<secondarySectionType> = ({
	Icon,
	description,
	track,
}) => {
	return (
		<Section id={track}>
			<BoxIcon>
				<div>
					<Icon />
				</div>
			</BoxIcon>
			<div>{description}</div>
		</Section>
	);
};

export default SecondarySectionModal;
