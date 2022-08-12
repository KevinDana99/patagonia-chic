import React from 'react';
import { Container } from './styled';
import { PrimaryCardType } from './types';

const PrimaryCard = ({
	children,
	className,
	hover = false,
}: PrimaryCardType) => {
	return (
		<Container hover={hover} className={className && className}>
			{children}
		</Container>
	);
};

export default PrimaryCard;
