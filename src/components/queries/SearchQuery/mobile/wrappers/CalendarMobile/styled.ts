import { IoSearch } from 'react-icons/io5';
import styled from 'styled-components';
import { size } from '../../../../../../constants/devicesSizes';
import PrimaryButton from '../../../../../buttons/PrimaryButton';

export const Container = styled.div``;

export const CalendarContainer = styled.div`
	border-radius: 24px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	width: 100%;
	overflow-y: hidden;
	overflow-x: hidden;

	@media (min-width: ${size.tablet}) and ((max-width: ${size.tabletL})) {
		padding-top: 80px;
	}
`;

export const CalendarDataContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	width: 100%;
	margin-bottom: 20px;
`;

export const CalendarDataItem = styled.div``;

export const CalendarDataLabel = styled.p`
	font-size: 13px;
	color: #666;
	font-weight: 300;
	font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
		Ubuntu, 'Helvetica Neue', 'Lucida Grande', sans-serif;
	margin: 0;
`;

export const CalendarDataTitle = styled.p`
	font-size: 14px;
	color: #222;
	font-weight: 500;
	font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
		Ubuntu, 'Helvetica Neue', 'Lucida Grande', sans-serif;
	margin: 0;
	text-transform: capitalize;
`;

export const SearchIcon = styled(IoSearch)`
	padding: 0px;
	margin: 0px;
	margin-right: 5px;
`;

export const ButtonSearch = styled(PrimaryButton)`
	min-width: 180px;
	min-height: 48px;
	display: flex;
	justify-content: space-around;
`;
