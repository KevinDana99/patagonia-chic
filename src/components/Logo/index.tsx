import React, { FC } from 'react';
import { Container } from './styled';
import { LogoType } from './types';
import LogoColor from './components/LogoColor';
import LogoWhite from './components/LogoWhite';

const Logo = ({
	size,
	theme = 'light',
	containerFullWidth = false,
	align = 'left',
}: LogoType) => {
	return (
		<Container containerFullWidth={containerFullWidth} align={align}>
			{theme === 'light' ? (
				<LogoColor size={size} />
			) : (
				<LogoWhite size={size} />
			)}
		</Container>
	);
};

export default Logo;
