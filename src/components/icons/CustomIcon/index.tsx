import React from 'react';
import { selectedIcon } from './icon.map';
import { Container } from './styled';
import { CustomIconType } from './types';

const CustomIcon = ({ icon, color = 'grey', size = 12 }: CustomIconType) => {
	const SelectedIcon = selectedIcon(icon, color, size);

	return (
		<Container size={size} color={color}>
			{SelectedIcon}
		</Container>
	);
};

export default CustomIcon;
