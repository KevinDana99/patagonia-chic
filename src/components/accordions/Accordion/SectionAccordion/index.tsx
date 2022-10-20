import React, { useState } from 'react';
import Section from '../Section';

import { ArrowIconDown, Divider, ArrowIconUp } from './styled';
import { SectionType } from './types';

export const SectionAccordion = ({ title, label, content }: SectionType) => {
	const [openSection, setOpenSection] = useState(false);

	return (
		<Section.Container>
			<>
				<Section.BoxTitle onClick={() => setOpenSection(!openSection)}>
					<>
						<Section.Title title={title} />
						{openSection ? <ArrowIconUp /> : <ArrowIconDown />}
					</>
				</Section.BoxTitle>
				<Section.BoxLink>
					<>
						{openSection &&
							label &&
							label.map((labelItem, index) => (
								<Section.Link
									href={labelItem.url}
									key={index}
									target={labelItem.target}
								>
									<Section.Label label={labelItem.label} />
								</Section.Link>
							))}
						{openSection && content && (
							<Section.Content>{content}</Section.Content>
						)}
					</>
				</Section.BoxLink>
				<Divider />
			</>
		</Section.Container>
	);
};

export default SectionAccordion;
