import styled from 'styled-components';
import { ItemListStyleType } from '../../types';

export const BoxItemList = styled.div`
	width: 100%;
`;

export const ItemList = styled.div<ItemListStyleType>`
	width: 100%;
	display: flex;
	align-items: center;
	cursor: pointer;
	background-color: ${(props) => (props.selected ? '#f7f8f8' : '#ffffff')};
	padding: 10px ${({ horizontalPadding }) => horizontalPadding}px;
	box-sizing: border-box;

	&:first-child {
		padding-top: ${({ edgesItemsAddedPadding }) =>
			10 + edgesItemsAddedPadding}px;
	}

	&:last-child {
		padding-bottom: ${({ edgesItemsAddedPadding }) =>
			10 + edgesItemsAddedPadding}px;
	}
`;

export const BoxImage = styled.div`
	width: 50px;
	min-width: 50px;
	height: 50px;
	background-color: #f1f4f7;
	border-radius: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Description = styled.div`
	margin-left: 13px;
`;

export const Title = styled.div`
	font-weight: 500;
	font-size: 17px;
`;

export const BoxSubtitle = styled.div`
	display: flex;
	align-items: center;
	color: #888888;
`;

export const SubTitle = styled.div`
	font-weight: 300;
	font-size: 14px;
`;
