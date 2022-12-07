import React from 'react';
import { Container } from './styled';
import { PrimaryCardType } from './types';

const PrimaryCard = ({
	children,
	className,
	hover = false,
	onClick,
}: PrimaryCardType) => {
	return (
		<Container
			hover={hover}
			className={className && className}
			onClick={onClick}
		>
			{children}
		</Container>
	);
};

export default PrimaryCard;
