import styled from 'styled-components';

export const Container = styled.div``;

export const CalendarContainer = styled.div`
	padding-top: 15px;
	border-radius: 24px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	width: 100%;

	overflow-y: scroll;
	overflow-x: hidden;
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
