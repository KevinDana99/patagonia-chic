import React from 'react';
import icons from './icons';
import { Container } from './styled';
import { CustomIconType } from './types';

const CustomIcon = ({
	name,
	color = '#666',
	size = 12,
	className,
}: CustomIconType) => {
	const SelectedIcon = icons[`${name}`];

	return (
		<Container className={className}>
			<SelectedIcon size={size} color={color} />
		</Container>
	);
};

export default CustomIcon;
