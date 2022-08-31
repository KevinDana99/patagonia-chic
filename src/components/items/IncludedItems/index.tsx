import React from 'react';
import { withFontStyles } from '../../../helpers/hocs/withFontStyles';
import SectionItem from './SectionItem';
import { Container } from './styled';
import { IncludedItemsType } from './types';

const Included = ({ items }: IncludedItemsType) => {
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

const IncludedItems = withFontStyles(Included);

export default IncludedItems;
