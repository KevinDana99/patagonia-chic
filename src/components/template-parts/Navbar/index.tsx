import React, { useEffect, useState } from 'react';

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
import Logo from '../../logos/Logo';
import { deviceSize } from '../../../constants/devicesSizes';
import useMediaQuery from '../../../hooks/useMediaQuery';

const Navbar = ({
	cartProductCount,
	onClickLogo,
	onClickMenu,
	onClickCart,
	onClickHelp,
	texts,
}: NavbarType) => {
	const [scrollStatus, setScrollStatus] = useState({
		activeNavBar: false,
		scrolling: 0,
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
	}, [scrollStatus]);

	const { background, color } = themesMap(scrollStatus.theme);

	return (
		<NavBarContainer backgroundTheme={background} colorTheme={color}>
			<LogoContainer onClick={onClickLogo}>
				<Logo
					size={125}
					theme={scrollStatus.theme === 'transparent' ? 'light' : 'color'}
				/>
			</LogoContainer>
			<MenuContainer>
				{!isMobile && (
					<ItemMenuContainer onClick={onClickHelp}>
						<MenuItemText colorTheme={color}>{texts.helpOption}</MenuItemText>
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
