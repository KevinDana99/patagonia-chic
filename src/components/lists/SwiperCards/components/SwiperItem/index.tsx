import React from 'react';
import PrimaryCard from '../../../../cards/PrimaryCard';
import TourCard from '../../../../cards/TourCard';
import CustomIcon from '../../../../graphics/CustomIcon';
import Text from '../../../../texts/Text';
import { Container, TextContainer } from './styled';
import { ItemCategoryType } from './types';

const categoryItem = ({
	iconName,
	name,
	selected,
	disabled,
	onClick,
}: ItemCategoryType) => {
	return (
		<Container
			onClick={!disabled ? onClick : undefined}
			selected={selected}
			disabled={disabled}
		>
			<PrimaryCard hover={true} />
		</Container>
	);
};

export default categoryItem;
