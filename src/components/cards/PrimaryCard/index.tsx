import React from 'react';
import { Container } from './styled';
import { PrimaryCardType } from './types';

const PrimaryCard = ({
	children,
	className,
	width,
	height,
}: PrimaryCardType) => {
	return (
		<Container width={width} height={height} className={className && className}>
			{children}
		</Container>
	);
};

export default PrimaryCard;
