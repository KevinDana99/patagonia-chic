import React from 'react';
import { NavbarType } from '../PrimaryNavbar/types';
import { Container } from './styled';
const SecondaryNavbar = ({ colorTheme, backgroundTheme }: NavbarType) => {
	return (
		<Container
			colorTheme={colorTheme}
			backgroundTheme={backgroundTheme}
		></Container>
	);
};

export default SecondaryNavbar;
