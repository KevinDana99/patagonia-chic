import styled from 'styled-components';
import { IoChevronDownSharp, IoReorderFourOutline } from 'react-icons/io5';
import { NavbarType } from './types';

export const BoxNavbar = styled.nav<NavbarType>`
	font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
		Ubuntu, 'Helvetica Neue', 'Lucida Grande', sans-serif;
	width: 100%;
	height: auto;
	position: fixed;
	top: 0px;
	left: 0px;
	color: ${(props) => props.colorTheme};
	background-color: ${(props) => props.backgroundTheme};
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.1);
	font-size: 14px;
	font-weight: 500;
`;

export const Container = styled.div`
	width: 100%;
	height: 99px;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

export const BoxLogo = styled.div``;
export const BoxMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;

	@media (max-width: 500px) {
		display: none;
	}
`;
export const ItemMenu = styled.li`
	margin-left: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const BoxReserve = styled.div`
	width: 200px;
	height: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

export const BoxLanguage = styled.div<NavbarType>`
	width: 79px;
	height: 40px;
	border-radius: 25px;
	padding: 5px 10px 5px 5px;
	background-color: ${(props) => props.backgroundTheme};
	display: flex;
	justify-content: space-around;
	align-items: center;

	@media (max-width: 500px) {
		display: none;
	}
`;

export const IcoDown = styled(IoChevronDownSharp)`
	margin-top: 4px;
	margin-left: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

export const IcoBar = styled(IoReorderFourOutline)`
	display: none;
	font-size: 1.8rem;

	@media (max-width: 500px) {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
