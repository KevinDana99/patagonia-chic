import React, { FC } from 'react';
import { SectionCopyrightsAndSocial } from './types';
import { ContainerSocial } from './styled';

const SectionSocial: FC<SectionCopyrightsAndSocial> = ({ label, Icons }) => {
	return (
		<ContainerSocial>
			<p>{label}</p>
			<div>
				{Icons.map((Icon, index) => (
					<Icon key={index} />
				))}
			</div>
		</ContainerSocial>
	);
};

export default SectionSocial;
