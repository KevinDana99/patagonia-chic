import React from 'react';
import CustomIcon from '../../../icons/CustomIcon';
import { Container, Requirements, Title } from './styled';
import { SectionItemType } from './types';
const SectionItem = ({ title, requirements, included }: SectionItemType) => {
	return (
		<Container>
			<CustomIcon icon="IconCheck" color="red" size={20} />
			<Title>{title}</Title>
			<Requirements>{requirements}</Requirements>
		</Container>
	);
};

export default SectionItem;
