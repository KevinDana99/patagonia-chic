import styled from 'styled-components';
import { NavigationArrowType } from './types';

export const GradientContainer = styled.div<NavigationArrowType>`
	height: 100%;
	width: 84px;
	${({ right }) => (right ? 'right: 0;' : '')}
	${({ left }) =>
		left
			? `
					left: 0;
					-webkit-transform: scaleX(-1);
					transform: scaleX(-1);
				`
			: ''}

	position: absolute;
	top: 0;
	z-index: 2;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;

	background: linear-gradient(
		270deg,
		#ffffff ${({ mobile }) => (mobile ? '0%' : '38.54%')},
		rgba(255, 255, 255, 0) ${({ mobile }) => (mobile ? '70%' : '100%')}
	);
`;

export const ArrowContainer = styled.div`
	width: 28px;
	height: 28px;
	margin: 0 10px;
	border-radius: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #d6d6d6;
	padding-left: 2px;
	box-sizing: border-box;
	cursor: pointer;
`;
