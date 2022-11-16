import styled from 'styled-components';
import CustomIcon from '../../graphics/CustomIcon';
import { ItemListStyleType } from './types';

export const Container = styled.div`
	width: 100%;
`;

export const HeaderContainer = styled.div<{ horizontalPadding: number }>`
	padding: 15px ${({ horizontalPadding }) => horizontalPadding}px 19px;
	box-sizing: border-box;
`;

export const BoxSearch = styled.div`
	padding-bottom: 10px;
	width: 100%;
	height: 29.02px;
	background-color: white;
	display: flex;
	align-items: center;
	border-bottom: 0.5px solid #9f9d9d;
`;

export const InputSearch = styled.input`
	width: 100%;
	margin-left: 21px;
	height: 21.02px;
	font-size: 15px;
	border: none;
	outline: none;

	&:placeholder-shown {
		text-overflow: ellipsis;
	}
`;

export const CloseIcon = styled(CustomIcon).attrs({
	name: 'close',
	size: 9,
})`
	background-color: #e6e7e7;
	border-radius: 100px;
	min-height: 20px;
	min-width: 20px;
	color: #a9a9a9;
	margin: 0 10px;
	cursor: pointer;

	&:hover {
		background-color: #dbdcdc;
	}
`;

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

export const LoadingContainer = styled.div<ItemListStyleType>`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: flex;
	padding: ${({ edgesItemsAddedPadding }) => 10 + edgesItemsAddedPadding}px
		${({ horizontalPadding }) => horizontalPadding}px;
	box-sizing: border-box;
`;

export const OptionalTitle = styled(Title)`
	font-size: 20px;
	margin-bottom: 18px;
`;
