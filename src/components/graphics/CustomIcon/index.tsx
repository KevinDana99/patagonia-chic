import React from 'react';
import icons from './icons';
import { CustomIconType } from './types';

const CustomIcon = ({
	name,
	color = '#666',
	size = 12,
	className,
}: CustomIconType) => {
	const SelectedIcon = icons[`${name}`];

	return (
		<div className={className}>
			<SelectedIcon size={size} color={color} />
		</div>
	);
};

export default CustomIcon;
