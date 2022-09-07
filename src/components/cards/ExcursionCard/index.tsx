import React from 'react';
import { Container, Card, ContainerImage } from './styled';
import { ExcursionCardType } from './types';

const ExcursionCard = ({ coverImage }: ExcursionCardType) => {
	return (
		<Container>
			<Card hover={true}>
				{coverImage && (
					<ContainerImage
						coverImage={typeof coverImage === 'string' ? coverImage : undefined}
					>
						{typeof coverImage !== 'string' && coverImage}
					</ContainerImage>
				)}
			</Card>
		</Container>
	);
};

export default ExcursionCard;
