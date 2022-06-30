import styled from 'styled-components';
import { ModalType } from './types';
import { IoCloseOutline as CloseI } from 'react-icons/io5';

export const BoxModal = styled.div<ModalType>`
	font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
		Ubuntu, 'Helvetica Neue', 'Lucida Grande', sans-serif;
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
	background-color: rgba(35, 37, 38, 0.7);
	-webkit-backdrop-filter: blur(3px);
	backdrop-filter: blur(3px);
	z-index: 5;
`;

export const Container = styled.div<ModalType>`
	width: 100%;
	min-width: 350px;
	max-width: ${(props) => (props.width ? props.width : '570px')};
	min-height: 500px;
	height: calc(100% - 120px);
	border-radius: 12px;
	position: absolute;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media (max-width: 500px) {
		margin-top: 120px;
		transform: ${(props) =>
			props.animate ? 'translateY(20px)' : 'translateY(600px)'};
		transition: all 400ms ease;
	}
`;

export const BoxTop = styled.div`
	position: sticky;
	top: 0;
	bottom: 0px;
	padding: 2%;
	box-sizing: border-box;
	width: 100%;
	height: 60px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #444;
`;

export const BoxScroll = styled.div`
	overflow-y: scroll;
	scroll-behavior: smooth;

	&::-webkit-scrollbar {
		width: 9px;
		height: 8px;
	}

	&::-webkit-scrollbar-thumb {
		background: #a5a5a5;
		border-radius: 2em;
	}
	&::-webkit-scrollbar-track {
		background: transparent;
	}
`;

export const BoxTitle = styled.div`
	min-height: 30px;
	position: relative;
	font-size: 17px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const ButtonClose = styled.div`
	font-size: 1.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	filter: contrast(50%);
	cursor: pointer;
`;

export const CloseIcon = styled(CloseI)`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const BoxHeader = styled.div<ModalType>`
	width: 100%;
	//height: 200px;
	height: 100%;
	max-height: 280px;
	background-image: ${({ coverImage }) =>
		coverImage ? `url(${coverImage})` : 'none'};
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

export const BoxHeaderText = styled.div`
	width: 100%;
	height: 100%;
	font-size: 1.5rem;
	color: white;
	background-size: 200% 200% !important;
	background-color: rgb(35, 132, 229);
	background-image: radial-gradient(
		circle,
		rgba(43, 235, 255, 0.46),
		rgba(59, 178, 249, 0.15) 27.5%,
		rgba(35, 132, 229, 0.3),
		rgb(35, 132, 229) 57.5%,
		rgba(35, 132, 229, 0.81) 75%,
		rgba(168, 88, 224, 0.37)
	) !important;
	opacity: 0.8;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const BoxChildren = styled.div`
	padding: 2%;
	box-sizing: border-box;
`;

export const BoxDownModal = styled.div`
	width: 100%;
	height: 50px;
	background-color: #f5f5f558;
	min-height: 50px;
	position: absolute;
	bottom: 0px;
	right: 0.05%;
	border-radius: 0em 0em 12px 12px;
`;
