import styled from 'styled-components';
import { deviceSize } from '../../../constants/devicesSizes';
import {
	BoxHeaderType,
	BoxModalTextType,
	BoxModalType,
	BoxScrollPropsType,
	ModalContainerType,
} from './types';

export const BoxModal = styled.div<BoxModalType>`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	height: 100%;
	width: 100%;
	visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all ${({ transitionTime }) => transitionTime / 2}ms ease;

	${(props) =>
		props.animate
			? `background-color: rgba(35, 37, 38, 0.7);
			-webkit-backdrop-filter: blur(3px);
			backdrop-filter: blur(3px);
			`
			: `background-color: rgba(35, 37, 38, 0);
			-webkit-backdrop-filter: blur(0px);
			backdrop-filter: blur(0px);`};
	z-index: 100;
`;

export const Container = styled.div<ModalContainerType>`
	width: 80%;
	min-width: 350px;
	max-height: 80vh;
	max-width: ${(props) => (props.width ? props.width : '570px')};
	border-radius: 12px;
	position: absolute;
	overflow: hidden;
	background-color: #fff;
	visibility: ${(props) => (props.animate ? 'visible' : 'hidden')};

	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	@media (${deviceSize.mobile}) {
		bottom: 0;
		width: 100%;
		visibility: visible;
		min-width: auto;
		transform: ${(props) =>
			props.animate ? 'translateY(0vh)' : 'translateY(90vh)'};
		border-radius: 12px 12px 0 0;
		transition: all ${({ transitionTime }) => transitionTime}ms ease;
	}
`;

export const BoxTop = styled.div`
	box-sizing: border-box;
	border-bottom: 1px solid #d4d4d4;
	width: 100%;
	height: 55px !important;
	min-height: 55px !important;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const BoxScroll = styled.div<BoxScrollPropsType>`
	overflow-y: scroll;
	scroll-behavior: smooth;
	flex: 1;

	&::-webkit-scrollbar {
		width: ${({ isScrollable }) => (isScrollable ? '9px' : '0')};
		height: 8px;
	}

	&::-webkit-scrollbar-thumb {
		background: #a5a5a5;
		border-radius: 2em;
	}
	&::-webkit-scrollbar-track {
		background: transparent;
	}

	@media (${deviceSize.mobile}) {
		max-height: 80vh;
	}
`;

export const BoxTitle = styled.div`
	box-sizing: border-box;
	padding-left: 24px;
	flex: 1;
	justify-content: flex-start;
	align-items: center;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const ButtonCloseContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 60px;
`;

export const BoxHeader = styled.div<BoxHeaderType>`
	width: 100%;
	min-height: 280px;
	max-height: 280px;
	background-image: ${({ coverImage }) =>
		coverImage ? `url(${coverImage})` : 'none'};
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

export const BoxHeaderText = styled.div<BoxModalTextType>`
	padding: 20px;
	box-sizing: border-box;
	width: 100%;
	height: ${(props) => (props.coverImage ? '100%' : 'auto')};
	min-height: 150px;
	color: white;
	background-size: 200% 200% !important;
	background-color: rgb(35, 132, 229);
	opacity: 0.8;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const BoxChildren = styled.div`
	box-sizing: border-box;
`;

export const BoxDownModal = styled.div`
	width: 100%;
	height: 50px;
	background: linear-gradient(
		0deg,
		rgba(255, 255, 255, 1) 0%,
		rgba(255, 255, 255, 0) 100%
	);
	min-height: 50px;
	position: absolute;
	bottom: 0px;
	right: 0.05%;
	border-radius: 0em 0em 12px 12px;
	overflow: hidden;
	pointer-events: none;
`;
