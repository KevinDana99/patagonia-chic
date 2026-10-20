import React from 'react';
import SectionAccordion from './SectionAccordion';
import { Container } from './styled';
import { AccordionType } from './types';

const Accordion = ({ sections }: AccordionType) => {
	return (
		<Container>
			{sections.map((section, index) => {
				return (
					<SectionAccordion
						key={index}
						label={section.label}
						title={section.title}
						content={section.content}
					/>
				);
			})}
		</Container>
	);
};

export default Accordion;
