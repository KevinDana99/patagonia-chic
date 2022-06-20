import styled from 'styled-components';
import { Hover } from './types';

export const ButtonTertiaryStyled = styled.button<Hover>`
	font-size: 12px;
	color: #888;
	font-weight: 300;
	background-color: transparent;
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;

	&:hover {
		font-size: 12px;
		color: #0090e0;
		font-weight: 300;
		text-decoration: underline;
		cursor: pointer;
		font-size: ${(props) => (props.hover ? '12.5px' : '12px')};
	}
`;

export const Icon = styled.img<Hover>`
	width: 12px;
	filter: ${(props) =>
		props.hover ? 'none' : 'brightness(140%) saturate(0%)'};
`;
