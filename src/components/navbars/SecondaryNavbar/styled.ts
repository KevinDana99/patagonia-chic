import styled from 'styled-components';
import { NavbarType } from '../PrimaryNavbar/types';

export const Container = styled.div<NavbarType>`
	margin: 0px;
	padding: 0px;
	color: ${(props) => props.colorTheme};
	background-color: ${(props) => props.backgroundTheme};
	width: 100%;
	height: 200px;
	border-radius: 0em 0em 15px 15px;
`;
