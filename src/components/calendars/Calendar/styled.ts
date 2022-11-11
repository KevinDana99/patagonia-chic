import styled from 'styled-components';
import { size } from '../../../constants/devicesSizes';
import { CalendarStyleType } from './types';

export const Container = styled.div<CalendarStyleType>`
	width: ${({ width }) => width};
	box-shadow: ${({ shadow }) =>
		shadow ? '0px 2px 15px rgba(0, 0, 0, 0.15)' : 'none'};

	overflow: hidden;

	border-radius: 15px;
	padding: 15px 0;

	.react-calendar {
		width: ${({ calendarWidth }) => calendarWidth}px;

		box-sizing: border-box;
	}
	.react-calendar--doubleView {
		width: ${({ calendarWidth }) => calendarWidth * 2}px;
	}

	button.react-calendar__tile {
		height: ${({ tileHeight }) => tileHeight}px !important;
	}

	.react-calendar__month-view {
		margin: 0 ${({ calendarMargin }) => calendarMargin}px !important;
	}

	${({ range }) =>
		range
			? `

					.react-calendar__tile--rangeEnd, .react-calendar__tile--hoverEnd {
						background: #1087ff;
						border-radius: 0 28px 28px 0;
						background: #1087ff;
						color: #fff !important;
					}

					.react-calendar__tile--hoverEnd {
						background: rgb(235,244,248);
						background: linear-gradient(90deg, rgba(235,244,248,1) 0%, rgba(235,244,248,0) 25%);
						border: 2px solid #1079e3;
						border-radius: 0 28px 28px 0 !important;
						border-left: 2px solid #ebf4f8 !important;
						color: #000 !important;
					}

					.react-calendar__tile--rangeEnd.react-calendar__tile--hoverEnd,
					.react-calendar__tile--rangeStart.react-calendar__tile--hoverStart {
						border: 2px solid #1087ff !important;
					}

					.react-calendar__tile--hoverStart {
						background: rgb(235,244,248);
						background: linear-gradient(-90deg, rgba(235,244,248,1) 0%, rgba(235,244,248,0) 25%);
						border: 2px solid #1087ff;
						border-radius: 28px 0 0 28px !important;
						border-right: 2px solid #ebf4f8 !important;
						color: auto !important;
					}

					.react-calendar__tile--rangeStart {
						background: #1087ff;
						border-radius: 28px 0 0 28px;
						color: #fff !important;
					}

					.react-calendar__tile--rangeStart.react-calendar__tile--rangeEnd:hover,
					.react-calendar__tile--rangeStart.react-calendar__tile--rangeEnd:not(.react-calendar__tile--hoverStart, .react-calendar__tile--hoverEnd)
					{
						border-radius: 100% !important;
					}

				@media ((min-width: ${size.mobileS}) and (max-width: ${size.tabletL})){
					border: none;
				}
			}`
			: `
			.react-calendar__tile--hover {
				background-color : transparent;
				border: 2px solid #1079e3;			
			}
			.react-calendar__tile--rangeStart {
				background: #1087ff;
				border-radius: 28px;
				background: #1087ff;
				color: #fff !important;
			}
	`}

	${({ highlightToday }) =>
		highlightToday &&
		`.react-calendar__tile--now {
			font-weight: 800;
			color: #1079e3;
		`}
`;

export const AvailabilityReferenceContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;
