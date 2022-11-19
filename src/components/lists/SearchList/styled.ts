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

export const OptionalTitle = styled.div`
	font-weight: 500;
	font-size: 20px;
	margin-bottom: 18px;
`;
