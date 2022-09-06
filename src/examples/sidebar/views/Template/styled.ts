import styled from 'styled-components';
import { TertiaryButton } from '../../../../components';

export const Title = styled.div`
	font-size: 20px;
	font-weight: 500;
`;

export const ItemContent = styled.div`
	padding: 10px 0px;
	border-radius: 8px;
	display: flex;
	cursor: pointer;
	&:hover {
		background-color: #f1f4f7;
	}
`;

export const ItemButton = styled(TertiaryButton)`
	font-weight: 300;
	font-size: 17px;
	color: #000;
	outline: none;
	text-align: start;

	&:active {
		color: #0090e0;
		outline: none;
	}
	${ItemContent}:hover & {
		font-size: 17px;
		color: #0090e0;
		text-decoration: none;
	}
`;
