import styled from 'styled-components';
import { ItemListStyleType } from './types';

export const Container = styled.div`
	width: 100%;
`;

export const HeaderContainer = styled.div<{ horizontalPadding: number }>`
	padding: 0 ${({ horizontalPadding }) => horizontalPadding}px;
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
`;

export const BoxItemList = styled.div`
	margin-top: 19px;
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
`;

export const BoxImage = styled.div`
	width: 50px;
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

export const Divisor = styled.div`
	margin: 0px 3px;
`;

export const LoadingContainer = styled.div<{ horizontalPadding: number }>`
	margin-top: 29px;
	width: 100%;
	height: 500px;
	display: flex;
	justify-content: flex-start;
	align-items: flex;
	padding: 0 ${({ horizontalPadding }) => horizontalPadding}px;
`;

export const OptionalTitle = styled(Title)`
	font-size: 20px;
	margin-bottom: 18px;
`;
