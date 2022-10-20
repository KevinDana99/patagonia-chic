import styled from 'styled-components';
import { size } from '../../../constants/devicesSizes';
import { PrimaryCalendarStyleType } from './types';

export const Container = styled.div<PrimaryCalendarStyleType>`
	.react-calendar__navigation__prev-button {
		visibility: ${(props) => props.disabledBackArrow && 'hidden'};
	}

	.react-calendar {
		box-shadow: ${(props) =>
			props.shadow ? '0px 2px 3px rgba(0, 0, 0, 0.276)' : 'none'};
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
						background: linear-gradient(90deg, rgba(235,244,248,1) 0%, rgba(235,244,248,0) 30%);
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
						background: linear-gradient(-90deg, rgba(235,244,248,1) 0%, rgba(235,244,248,0) 30%);
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
