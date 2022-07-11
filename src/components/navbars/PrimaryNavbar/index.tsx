import React, { useEffect, useState } from 'react';
import Logo from '../../../examples/navbar/logo';
import { BrasilFlag } from '../../../assets/images/flags/index';

import {
	BoxLanguage,
	BoxLogo,
	BoxMenu,
	BoxNavbar,
	BoxReserve,
	Container,
	IcoBar,
	IcoDown,
	ItemMenu,
	PrimaryButtonNav,
} from './styled';
import SecondaryNavbar from '../SecondaryNavbar';
import SideBar from '../SideBar';
import { themesMap } from './themes_map';
import { NavbarType } from './types';

const Navbar: React.FC<NavbarType> = () => {
	const [state, setState] = useState({
		activeSideBar: false,
		activeNavBar: false,
		scrolling: window.scrollY,
		theme: 'transparent',
	});

	const listenScroll = () => {
		setState({
			...state,
			scrolling: window.scrollY,
		});
	};

	window.addEventListener('scroll', listenScroll);

	const { background, color, languageBackground } = themesMap(state.theme);

	const changeThemeNavbar = () => {
		state.scrolling > 0
			? setState({ ...state, theme: 'light' })
			: setState({ ...state, theme: 'transparent' });
	};

	const handleSideBar = () => {
		setState({ ...state, activeSideBar: !state.activeSideBar });
	};

	const handleNavBar = () => {
		setState({ ...state, activeNavBar: !state.activeNavBar });
	};

	useEffect(() => {
		changeThemeNavbar();
	}, [state.scrolling]);

	return (
		<>
			<BoxNavbar>
				<Container backgroundTheme={background} colorTheme={color}>
					<BoxLogo>
						<Logo />
					</BoxLogo>
					<BoxMenu>
						<ItemMenu>Inicio</ItemMenu>
						<ItemMenu>
							Excursiones por destino <IcoDown onClick={handleNavBar} />
						</ItemMenu>
						<ItemMenu>Ayuda</ItemMenu>
					</BoxMenu>
					<BoxReserve>
						<BoxLanguage backgroundTheme={languageBackground}>
							<BrasilFlag /> BRL
						</BoxLanguage>
						<PrimaryButtonNav title={'Reservar'} />
						<IcoBar onClick={handleSideBar} />
					</BoxReserve>
				</Container>
				{state.activeNavBar && (
					<SecondaryNavbar backgroundTheme={background} colorTheme={color} />
				)}
			</BoxNavbar>

			<SideBar
				closeAction={handleSideBar}
				activeSidebar={state.activeSideBar}
			/>
		</>
	);
};

export default Navbar;
