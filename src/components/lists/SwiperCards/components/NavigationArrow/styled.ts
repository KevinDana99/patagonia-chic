import styled from 'styled-components';
import { NavigationArrowType } from './types';

export const GradientContainer = styled.div<NavigationArrowType>`
	height: 76%;
	width: 84px;

	${({ left }) =>
		left &&
		`	-webkit-transform: scaleX(-1);
					transform: scaleX(-1);
				`}

	position: absolute;
	top: 0;
	z-index: 3;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;
`;

export const ArrowContainer = styled.div`
	width: 80px;
	height: 80px;
	border-radius: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #3b3b3b;
	padding-left: 2px;
	box-sizing: border-box;
	background-color: white;
	cursor: pointer;
	box-shadow: 0px 1px 1px 2px rgba(0, 0, 0, 0.073);
	z-index: 5;
`;
