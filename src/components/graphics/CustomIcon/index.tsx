import React from 'react';
import icons from './icons';
import { Container } from './styled';
import { CustomIconType } from './types';

const CustomIcon = ({
	name,
	color = '#666',
	size = 12,
	className,
	onClick,
}: CustomIconType) => {
	const SelectedIcon = icons[`${name}`];

	return (
		<Container className={className} onClick={onClick}>
			<SelectedIcon size={size} color={color} />
		</Container>
	);
};

export default CustomIcon;
