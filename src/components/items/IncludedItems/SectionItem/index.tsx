import React from 'react';
import { IncludedItemsType } from '../types';
import { Container } from './styled';
import { SectionItemType } from './types';
const SectionItem = ({ title, requirements, included }: SectionItemType) => {
	return (
		<Container>
			<div>{title}</div>
			<div>{requirements}</div>
		</Container>
	);
};

export default SectionItem;
