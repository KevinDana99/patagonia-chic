import styled from 'styled-components';
import { IoCloseOutline } from 'react-icons/io5';
import TertiaryButton from '../../buttons/TertiaryButton';
import { SideBarType } from './types';

export const BoxBackground = styled.div<SideBarType>`
	position: absolute;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(3px);
	display: ${(props) => (props.activeSidebar ? 'flex' : 'none')};
`;

export const Container = styled.div<SideBarType>`
	position: fixed;
	right: 0px;
	font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
		Ubuntu, 'Helvetica Neue', 'Lucida Grande', sans-serif;

	padding: 13px;
	box-sizing: border-box;
	width: 333px;
	height: 814px;
	background-color: rgba(255, 255, 255, 1);
	border-radius: 15px 0px 0px 15px;
	display: ${(props) => (props.activeSidebar ? 'flex' : 'none')};
	flex-direction: column;
`;

export const BoxControls = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const BoxLogo = styled.div``;

export const BoxClose = styled.div`
	width: 30px;
	height: 30px;
	margin-right: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const IconClose = styled(IoCloseOutline)`
	color: rgba(0, 0, 0, 1);
	font-size: 18.89px;
`;

export const Hr = styled.div`
	margin-top: 10px;
	margin-left: 14px;
	background-color: darkgrey;
	width: 90%;
	height: 1px;
`;

export const Content = styled.div`
	margin-top: 20px;
	height: 300px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding-left: 13px;
	box-sizing: border-box;
	color: #000;
`;

export const ItemContent = styled.div`
	margin-top: 20px;
	height: 26px;
`;

export const BtnItemContent = styled(TertiaryButton)`
	font-weight: 300;
	font-size: 17px;
	color: #000;

	&:active {
		color: #0090e0;
		outline: none;
	}
	&:hover {
		font-size: 17px;
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
