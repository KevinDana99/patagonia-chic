import React, { useEffect, useState, useCallback } from 'react';

import {
	NavBarContainer,
	CartIcon,
	ItemMenuContainer,
	LogoContainer,
	MenuContainer,
	MenuItemText,
	SidebarMenuIcon,
	CartStatus,
	CartCount,
} from './styled';
import { themesMap } from './themes_map';
import { NavbarType } from './types';
import { withFontStyles } from '../../../helpers/hocs/withFontStyles';
import Logo from '../../Logo';
import { deviceSize } from '../../../consntants/devicesSizes';
import useMediaQuery from '../../../hooks/useMediaQuery';

const Navbar = ({
	cartProductCount,
	onClickLogo,
	onClickMenu,
	onClickCart,
	onClickHelp,
}: NavbarType) => {
	const [scrollStatus, setScrollStatus] = useState({
		activeNavBar: false,
		scrolling: window.scrollY,
		theme: 'transparent',
	});

	const isMobile = useMediaQuery(deviceSize.mobileL);

	useEffect(() => {
		const listenScroll = () => {
			const scroll = window.scrollY;

			setScrollStatus({
				...scrollStatus,
				scrolling: scroll,
				theme: scroll > 0 ? 'light' : 'transparent',
			});
		};

		window.addEventListener('scroll', listenScroll);
		return () => window.removeEventListener('scroll', listenScroll);
	}, []);

	const { background, color } = themesMap(scrollStatus.theme);

	return (
		<NavBarContainer backgroundTheme={background} colorTheme={color}>
			<LogoContainer onClick={onClickLogo}>
				<Logo
					size={125}
					theme={scrollStatus.theme === 'transparent' ? 'dark' : 'light'}
				/>
			</LogoContainer>
			<MenuContainer>
				{!isMobile && (
					<ItemMenuContainer onClick={onClickHelp}>
						<MenuItemText colorTheme={color}>Ayuda</MenuItemText>
					</ItemMenuContainer>
				)}
				<ItemMenuContainer onClick={onClickCart}>
					<CartIcon size={25} colorTheme={color} />
					{cartProductCount && cartProductCount > 0 ? (
						<CartStatus>
							<CartCount>{cartProductCount}</CartCount>
						</CartStatus>
					) : null}
				</ItemMenuContainer>
				<ItemMenuContainer onClick={onClickMenu}>
					<SidebarMenuIcon size={25} colorTheme={color} />
				</ItemMenuContainer>
			</MenuContainer>
		</NavBarContainer>
	);
};

export default withFontStyles(Navbar);
