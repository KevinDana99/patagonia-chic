import styled from 'styled-components';
import {
	ItemMenuType,
	LogoClickType,
	NavbarContainerType,
	NavbarIconType,
} from './types';
import { HiOutlineShoppingBag, HiMenu } from 'react-icons/hi';
import { deviceSize } from '../../../constants/devicesSizes';
import Text from '../../texts/Text';

export const NavBarContainer = styled.div<NavbarContainerType>`
	width: 100%;
	height: 99px;
	color: ${(props) => props.colorTheme};
	background: ${(props) => props.backgroundTheme};
	display: flex;
	justify-content: space-around;
	align-items: center;
	position: fixed;
	top: 0px;
	left: 0px;
	transition: all 0.2s ease-in;
	z-index: 2;

	@media ${deviceSize.mobile} {
		justify-content: space-between;
	}
`;

export const LogoContainer = styled.div<LogoClickType>`
	cursor: pointer;
	@media ${deviceSize.mobile} {
		margin-left: 20px;
	}
`;
export const MenuContainer = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	@media ${deviceSize.mobile} {
		margin-right: 10px;
	}
`;
export const ItemMenuContainer = styled.li<ItemMenuType>`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0px 15px;
	cursor: pointer;
	@media ${deviceSize.mobile} {
		margin: 0px 10px;
	}
`;

export const MenuItemText = styled.p<NavbarIconType>`
	font-weight: 600;
	font-size: 14px;
	color: ${(props) => props.colorTheme};
	color: red;
`;

export const CartIcon = styled(HiOutlineShoppingBag)<NavbarIconType>`
	color: ${(props) => props.colorTheme};
`;

export const CartStatus = styled.div`
	background: #f74827;
	position: absolute;
	top: 30px;
	margin-left: 20px;
	padding: 3px;
	justify-content: center;
	font-size: 12px;
	font-weight: 600;
	border-radius: 100px;
	display: flex;
	min-width: 16px;
	box-sizing: content-box;

	@media ${deviceSize.mobile} {
		display: none;
	}
`;

export const CartCount = styled(Text)`
	margin: 0;
	color: #ffffff;
`;

export const SidebarMenuIcon = styled(HiMenu)<NavbarIconType>`
	color: ${(props) => props.colorTheme};
`;
