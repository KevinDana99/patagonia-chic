import styled from 'styled-components';
import { size } from '../../../../../constants/devicesSizes';
import { OptionContainerType, PlaceContainerType } from '../../types';
const selectedShadow =
	'12px 0px 15px -5px rgb(0 0 0 / 20%), -12px 0px 15px -5px rgb(0 0 0 / 20%);';

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

export const PlaceContainer = styled.div<Pick<PlaceContainerType, 'selected'>>`
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
export const PlaceListContainer = styled.div`
	position: absolute;
	width: 350px;
	margin-top: 10px;
	border-radius: 30px;
	box-shadow: rgb(0 0 0 / 10%) 0px 3px 8px;
	padding: 20px;
	top: 80px;
	left: 20px;
	background-color: #ffffff;

	@media ((min-width: ${size.mobileS}) and (max-width: ${size.tabletL})) {
		margin-top: 50px;
		width: 100%;
		position: relative;
		top: 0px;
		left: 0px;
		box-shadow: none;
		overflow-y: scroll;
	}
`;

export const OptionContainerPlaceList = styled.div<{ isFocused: boolean }>`
	display: flex;
	align-items: center;
	flex: 1;
	padding-left: 30px;
	box-shadow: ${({ isFocused }) => (isFocused ? selectedShadow : 'none')};

	&:hover {
		box-shadow: ${selectedShadow};
		cursor: pointer;
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
