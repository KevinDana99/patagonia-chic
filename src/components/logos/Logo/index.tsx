import React from 'react';
import { Container } from './styled';
import { LogoType } from './types';
import LogoColor from './components/LogoColor';
import LogoWhite from './components/LogoWhite';

const Logo = ({
	size,
	theme = 'color',
	containerFullWidth = false,
	align = 'left',
	onClick,
}: LogoType) => {
	return (
		<Container
			onClick={onClick}
			containerFullWidth={containerFullWidth}
			align={align}
		>
			{theme === 'light' ? (
				<LogoWhite size={size} />
			) : (
				<LogoColor size={size} />
			)}
		</Container>
	);
};

export default Logo;
