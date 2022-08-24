import styled from 'styled-components';
import { deviceSize, size } from '../../../../../consntants/devicesSizes';
import { Container } from '../../styled';

export const CalendarContainer = styled.div`
	box-shadow: rgb(0 0 0 / 10%) 0px 3px 8px !important;
	border-radius: 24px;

	box-sizing: border-box;
	background-color: #ffffff;
	display: flex;
	justify-content: space-around;
	position: absolute;
	left: 16px;
	top: 40px;
	margin-top: 50px;
	width: 875px;

	@media ((min-width: ${size.mobileS}) and (max-width: ${size.tabletL})) {
		display: none;
	}
`;

export const CalendarDesktopContainer = styled.div`
	display: flex;
	@media ((min-width: ${size.mobileS}) and (max-width: ${size.tablet})) {
		display: none;
	}
`;

export const CalendarInputContainer = styled.div`
	display: flex;
`;
