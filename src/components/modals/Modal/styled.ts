import styled from 'styled-components';
import { modalType } from './types';
import { IoCloseOutline as CloseI } from 'react-icons/io5';

export const BoxModal = styled.div<modalType>`
	font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
		Ubuntu, 'Helvetica Neue', 'Lucida Grande', sans-serif;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	height: 100%;
	width: 100%;
	display: ${(props) => (props.visible ? 'flex' : 'none')};
	justify-content: center;
	align-items: center;
	background-color: rgba(35, 37, 38, 0.7);
	-webkit-backdrop-filter: blur(3px);
	backdrop-filter: blur(3px);
	z-index: 5;
`;

export const Container = styled.div`
	margin-top: 120px;
	width: 100%;
	max-width: 570px;
	min-height: 500px;
	height: calc(100% - 120px);
	border-radius: 12px;
	position: relative;
	background-color: #fff;
	margin-top: 120px;
	transition: margin-top 300ms ease-out;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
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

export const BoxPrueba = styled.div`
	overflow-y: scroll;

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

export const BoxHeader = styled.div<modalType>`
	width: 100%;
	height: 200px;
	max-height: 250px;
	background-image: ${({ coverImage }) =>
		coverImage ? `url(${coverImage})` : 'none'};
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;
export const BoxChildren = styled.div`
	padding: 2%;
	box-sizing: border-box;
`;
