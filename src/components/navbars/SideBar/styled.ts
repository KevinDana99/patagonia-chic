import styled from 'styled-components';
import { IoCloseOutline, IoChevronBackOutline } from 'react-icons/io5';
import TertiaryButton from '../../buttons/TertiaryButton';
import { SidebarComponentType } from './types';
import { deviceSize } from '../../../consntants/devicesSizes';
import { TbWorld } from 'react-icons/tb';

export const BoxBackground = styled.div<SidebarComponentType>`
	position: absolute;
	width: 100%;
	min-height: 100vh;
	left: 0px;
	top: 0px;
	background: rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(3px);
	display: ${(props) => (props.activeSidebar ? 'flex' : 'none')};
	justify-content: flex-end;
`;

export const SidebarContainer = styled.div<SidebarComponentType>`
	right: 0px;
	padding: 0px 20px;
	box-sizing: border-box;
	width: 375px;
	min-height: 100vh;
	background-color: rgba(255, 255, 255, 1);
	transform: ${(props) =>
		props.activeSidebar ? 'translateX(0px)' : 'translateX(360px);'};
	transition: all 200ms ease-out;
	display: flex;
	flex-direction: column;

	@media ${deviceSize.mobileL} {
		width: 90%;
	}
`;

export const SidebarHeader = styled.div`
	display: flex;
	flex-direction: column;
`;

export const SidebarHeaderContent = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 30px 0px;
	align-items: center;
`;

export const SidebarHeaderDivider = styled.div`
	background: linear-gradient(
		-90deg,
		rgba(43, 235, 255, 1) 0%,
		rgba(59, 178, 249, 1) 20%,
		rgba(35, 132, 229, 1) 40%,
		rgba(35, 132, 229, 1) 60%,
		rgba(35, 132, 229, 1) 80%,
		rgba(168, 88, 224, 1) 100%
	);
	height: 1px;
	width: '100%';
`;

export const SidebarMenuTitle = styled.h3`
	margin-top: 35px;
	margin-bottom: 10px;
	font-weight: 500;
`;

export const LogoContainer = styled.div``;

export const CloseIconContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const IconClose = styled(IoCloseOutline)`
	color: rgba(0, 0, 0, 1);
	font-size: 35px;
`;

export const ButtonBack = styled.button`
	background-color: transparent;
	height: 30px;
	border: none;
	font-weight: 300;
	font-size: 17px;
	align-items: center;
	display: flex;
	cursor: pointer;
`;

export const IconBack = styled(IoChevronBackOutline)`
	margin-bottom: 2px;
`;

export const SidebarContent = styled.div`
	padding: 15px 0px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	box-sizing: border-box;
	color: #000;
	align-items: stretch;
`;

export const ItemContent = styled.div`
	padding: 10px 0px;
	border-radius: 8px;
	display: flex;
	cursor: pointer;
	&:hover {
		background-color: #f1f4f7;
	}
`;

export const ItemButton = styled(TertiaryButton)`
	font-weight: 300;
	font-size: 17px;
	color: #000;
	outline: none;
	text-align: start;

	&:active {
		color: #0090e0;
		outline: none;
	}
	${ItemContent}:hover & {
		font-size: 17px;
		color: #0090e0;
		text-decoration: none;
	}
`;

export const BtnItemContentNormal = styled.button`
	background-color: transparent;
	border: none;
	width: 80%;
	height: 28px;
	font-size: 17px;
	color: #000;
	display: flex;
	align-items: center;
	font-weight: 300;

	&:hover {
		color: #0090e0;
		outline: none;
		background-color: #f1f4f7;
		font-size: 17px;
	}
`;

export const Language = styled.div`
	background-color: #ffffff;
	width: fit-content;
	border-radius: 25px;
	padding: 7px 10px;
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-top: auto;
	margin-bottom: 40px;
	background-color: #f1f4f7;
	align-self: center;

	@media ${deviceSize.mobileL} {
		margin-bottom: 60px;
	}

	@media ${deviceSize.tablet} {
		margin-bottom: 75px;
	}
`;

export const WorldIcon = styled(TbWorld)`
	color: #3b3b3b;
	font-size: 25px;
`;
