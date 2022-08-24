import React, { FC } from 'react';
import { Container } from './styled';
import { LogoType } from './types';
import Log from '../../assets/images/logos/LogCommon/LogCommon';
import LogWhite from '../../assets/images/logos/LogWhite/LogWhite';

const Logo: FC<LogoType> = ({
	size,
	theme = 'light',
	containerFullWidth = false,
	align = 'left',
}) => {
	return (
		<Container containerFullWidth={containerFullWidth} align={align}>
			{theme === 'light' ? <Log size={size} /> : <LogWhite size={size} />}
		</Container>
	);
};

export default Logo;
