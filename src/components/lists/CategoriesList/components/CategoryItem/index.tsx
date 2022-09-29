import React from 'react';
import CustomIcon from '../../../../graphics/CustomIcon';
import Text from '../../../../texts/Text';
import { Container, ItemText } from './styled';
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
			<CustomIcon
				name={iconName}
				size={23}
				color={selected ? '#000' : '#717171'}
			/>
			<ItemText>
				<Text size={8}>{name}</Text>
			</ItemText>
		</Container>
	);
};

export default categoryItem;
