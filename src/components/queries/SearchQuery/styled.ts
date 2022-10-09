import { IoSearch } from 'react-icons/io5';
import styled from 'styled-components';
import { size } from '../../../constants/devicesSizes';
import PrimaryButton from '../../buttons/PrimaryButton';
import { DisableSearchType, OptionContainerType } from './types';

const selectedShadow =
	'12px 0px 15px -5px rgb(0 0 0 / 20%), -12px 0px 15px -5px rgb(0 0 0 / 20%);';

export const SearchQueryContainer = styled.div`
	position: relative;
	overflow: visible;
`;

export const SearchQueryBarContainer = styled.div`
	overflow: hidden;
	height: 64px;
	width: 100%;
	max-width: 875px;
	display: flex;
	justify-content: space-between;
	box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
	border-radius: 50px;
	background: #ffffff;
	box-sizing: border-box;
`;

export const OptionContainer = styled.div<
	Pick<OptionContainerType, 'isSelected'>
>`
	display: flex;
	align-items: center;
	flex: 1;
	padding-left: 30px;
	justify-content: space-around;
	width: 180px;
	box-shadow: ${({ isSelected }) => (isSelected ? selectedShadow : 'none')};

	&:hover {
		box-shadow: ${selectedShadow};
		cursor: pointer;
	}
`;

export const Title = styled.p<DisableSearchType>`
	font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
		Ubuntu, 'Helvetica Neue', 'Lucida Grande', sans-serif;
	box-sizing: border-box;
	font-size: 14px;
	font-weight: 400;
	margin-top: 0;
	margin-bottom: 11;
	text-transform: capitalize;

	color: ${(props) => props.disableSearch && 'red'};
	font-weight: 200;
`;

export const Divider = styled.div`
	border: 0.5px solid #ddd;
	border: 0.01px solid #ddd;
	margin-top: 10px;
	margin-bottom: 10px;
`;

export const ButtonContainer = styled.div`
	margin-left: 10px;
	margin-right: 10px;
`;

export const ButtonSearch = styled(PrimaryButton)`
	min-width: 185px;
	height: 48px;
	display: flex;
	justify-content: space-around;

	@media (min-width: ${size.mobileS}) {
		width: 48px;
		height: 48px;
	}
	@media (max-width: ${size.tabletL}) {
		min-width: 48px;
		height: 48px;
	}
`;

export const SearchIcon = styled(IoSearch)`
	padding: 0px;
	margin: 0px;
	margin-right: 5px;

	@media ((min-width: ${size.mobileS}) and (max-width: ${size.tabletL})) {
		margin: 0px;
	}
`;

export const ContainerModal = styled.div`
	padding: 15px 5px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const EmptyListContainer = styled.div`
	background-color: #ffffff;
	padding: 0px 30px;
`;

export const EmptyMessage = styled.p`
	font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
		Ubuntu, 'Helvetica Neue', 'Lucida Grande', sans-serif;
	box-sizing: border-box;
	font-size: 14px;
	font-weight: 400;
`;

export const PlaceContainer = styled.div<PlacesListContainerType>`
	display: flex;
	align-items: center;
	height: auto;
	background-color: ${(props) => (props.selected ? '#f7f8f8' : '#ffffff')};
	padding: 10px 30px;

	font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
		Ubuntu, 'Helvetica Neue', 'Lucida Grande', sans-serif;
	&:hover {
		cursor: pointer;
		background-color: #f7f8f8;
	}
`;

export const PlaceContent = styled.div`
	margin-left: 20px;
`;

export const PlaceFilter = styled(EmptyMessage)`
	font-weight: bold;
	margin: 0px;
`;

export const PlaceImage = styled.img`
	height: 45px;
	width: 45px;
	border-radius: 8px;
	background-color: red;
`;

export const PlaceSubtitle = styled.p`
	font-size: 12px;
	margin: 0px;
	color: #666;
`;

export const PlaceTitle = styled.p`
	font-size: 14px;
	margin: 0px;
	font-weight: 500;
`;
