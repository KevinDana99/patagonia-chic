import React from 'react';
import ItemCard from '../../../../cards/ItemCard';
import { Container } from './styled';
import { SwiperItemType } from './types';

const SwiperItem = ({
	selected,
	disabled,
	onClick,
	title,
	icon,
	keywordColor,
	keywords,
}: SwiperItemType) => {
	return (
		<Container
			onClick={!disabled ? onClick : undefined}
			selected={selected}
			disabled={disabled}
		>
			<ItemCard
				title={title}
				icon={icon}
				keywordColor={keywordColor}
				keywords={keywords}
			></ItemCard>
		</Container>
	);
};

export default SwiperItem;
