import React from 'react';
import Text from '../../../texts/Text/index';
import { LinkStyled } from '../styled';
import {
	ContainerSectionCommon,
	DesktopSectionCommon,
	SectionLabel,
	SectionTitle,
} from './styled';
import { SectionType } from '../types';

const SectionCommon = ({ title, label, devMode }: SectionType) => {
	return (
		<ContainerSectionCommon devMode={devMode}>
			<DesktopSectionCommon>
				<SectionTitle>
					<Text size={15} weight={'semi-bold'}>
						{title}
					</Text>
				</SectionTitle>
				{label.map((item, index) => (
					<LinkStyled href={item.url} key={index} target={item.target}>
						<SectionLabel>
							<Text size={15}>{item.label}</Text>
						</SectionLabel>
					</LinkStyled>
				))}
			</DesktopSectionCommon>
		</ContainerSectionCommon>
	);
};

export default SectionCommon;
