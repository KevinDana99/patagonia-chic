import { IoSearch } from 'react-icons/io5';
import styled from 'styled-components';
import { size } from '../../../constants/devicesSizes';
import PrimaryButton from '../../buttons/PrimaryButton';

export const SearchQueryContainer = styled.div`
	position: relative;
	overflow: visible;
	width: 100%;
	max-width: 875px;
`;

export const SearchQueryBarContainer = styled.div`
	overflow: hidden;
	height: 64px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
	border-radius: 50px;
	background-color: #fff;
	box-sizing: border-box;
	border: 1px solid #ddd;

	&:hover {
		background-color: #f8f8f8;
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	align-items: center;
	margin-left: 10px;
	margin-right: 8px;
`;

export const ButtonSearch = styled(PrimaryButton)`
	min-width: 185px;
	height: 48px;
	display: flex;
	justify-content: space-around;

	@media (max-width: ${size.tabletL}) {
		min-width: 48px;
		width: 48px;
		height: 48px;
	}
`;

export const SearchIcon = styled(IoSearch).attrs({
	size: 20,
})`
	padding: 0px;
	margin: 0px;
	margin-right: 5px;
`;
