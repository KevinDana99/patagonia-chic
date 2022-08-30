import React from 'react';
import SectionAccordion from './SectionAccordion';

const Accordion = () => {
	return (
		<SectionAccordion
			label={[{ label: 'Titulo1', url: 'https://www.google.com.ar' }]}
			title={'Esta es una seccion'}
		/>
	);
};

export default Accordion;
