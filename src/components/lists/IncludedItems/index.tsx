import React from 'react';
import SectionItem from './SectionItem';
import { Container } from './styled';
import { IncludedItemsType } from './types';

const IncludedItems = ({ items }: IncludedItemsType) => {
	return (
		<Container>
			{items.map((item, index) => {
				return (
					<SectionItem
						key={index}
						title={item.title}
						included={item.included}
						subTitle={item.subTitle}
					/>
				);
			})}
		</Container>
	);
};

export default IncludedItems;
