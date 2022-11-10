import styled from 'styled-components';
import { size } from '../../../../../constants/devicesSizes';

export const ContainerModal = styled.div`
	width: 100%;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const PlacesListContainer = styled.div`
	position: absolute;
	width: 350px;
	border-radius: 30px;
	box-shadow: rgb(0 0 0 / 10%) 0px 3px 8px;
	overflow: hidden;
	top: 75px;
	left: 0px;
	background-color: #ffffff;
	z-index: 20;

	@media ((min-width: ${size.mobileS}) and (max-width: ${size.tabletL})) {
		width: 100%;
		height: 100%;
		padding: 30px 40px 50px 10px;
		box-shadow: none;
	}
`;

export const DatesContainer = styled.div`
	position: absolute;
	width: 100%;
	border-radius: 50px;
	box-shadow: rgb(0 0 0 / 10%) 0px 3px 8px;
	overflow: hidden;
	top: 75px;
	left: 0px;
	background-color: #ffffff;
	z-index: 20;
`;
