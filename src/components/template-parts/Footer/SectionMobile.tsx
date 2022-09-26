import React from 'react';
import Accordion from '../../accordions/Accordion';
import { SectionContainer } from './styled';
import { SectionMobileType } from './types';

export const SectionMobile = ({ sections }: SectionMobileType) => {
	return (
		<SectionContainer>
			<Accordion sections={sections} />
		</SectionContainer>
	);
};

export default SectionMobile;
