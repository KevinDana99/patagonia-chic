import styled from 'styled-components';
import PrimaryButton from '../../../buttons/PrimaryButton';

export const InputMobile = styled.input`
	width: 80%;
	padding-left: 2%;
	padding-right: 2%;
	margin-bottom: 10px;
	box-sizing: border-box;
	background-color: transparent;
	border: none;
	outline: none;
	text-align: center;
`;

export const ContainerFooter = styled.div`
	width: 100%;
	height: 50px;
	background-color: transparent;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

export const ItemFooter = styled.div`
	font-size: 13px;
	color: #666;
	display: flex;
	flex-direction: column;
`;

export const DataFooter = styled.div`
	font-size: 14px;
	color: #222;
	font-weight: 600;
`;

export const ContainerButton = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

export const SearchButton = styled(PrimaryButton)`
	margin-top: 50px;
	min-height: 58px;
	width: 200px;
	max-width: 250px;
	font-size: 14px;
`;
