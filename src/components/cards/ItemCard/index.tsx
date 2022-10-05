import React from 'react';
import { Card, Container } from './styled';
import { ExcursionCardType } from './types';

const ItemCard = () => {
	return (
		<Container>
			<Card hover={true}>Hello world</Card>
		</Container>
	);
};

export default ItemCard;
