import React, { useState } from 'react';
import CustomIcon from '../../../graphics/CustomIcon';
import { Container } from './styled';
import { CloseButtonPropsType } from './types';

const CloseButton = ({ onClick }: CloseButtonPropsType) => {
	const [hover, setHover] = useState(false);

	return (
		<Container
			onClick={onClick}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<CustomIcon
				name="close"
				size={17}
				color={hover ? '#808080' : '#bfbfbf'}
			/>
		</Container>
	);
};

export default CloseButton;
