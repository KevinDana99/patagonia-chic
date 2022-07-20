import {
	IoClose,
	IoChevronBackSharp,
	IoChevronForwardSharp,
} from 'react-icons/io5';
import styled from 'styled-components';
import {
	CalendarType,
	DispositiveType,
	OptionItemType,
	PlaceListType,
	SearchQueryType,
} from './types';

const selectedShadow =
	'12px 0px 15px -5px rgb(0 0 0 / 20%), -12px 0px 15px -5px rgb(0 0 0 / 20%);';

export const SearchQueryContainer = styled.div`
	display: inline-block;
	width: 100%;
	flex-direction: column;
`;
export const SearchQueryOptions = styled.div<DispositiveType>`
	display: inline-flex;
	box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
	border-radius: 50px;
	background: #ffffff;
	overflow: hidden;
	${(props) =>
		props.dispositive != 'DESKTOP' &&
		`
	width: 100%;
	`}
`;

export const OptionContainer = styled.div<OptionItemType>`
	display: flex;
	align-items: center;
	flex: 1;
	padding-left: 30px;
	width: 180px;
	box-shadow: ${({ isSelected }) => (isSelected ? selectedShadow : 'none')};

	&:hover {
		box-shadow: ${selectedShadow};
		cursor: pointer;
	}

	@media (max-width: 500px) {
		width: 80%;
		display: flex;
		justify-content: space-around;
		flex-direction: row;
	}
`;

export const OptionContent = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	flex-grow: 1;
`;

export const Label = styled.p`
	font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
		Ubuntu, 'Helvetica Neue', 'Lucida Grande', sans-serif;
	box-sizing: border-box;
	font-size: 12px;
	font-weight: 600;
	margin-bottom: 0;
	margin-top: 11;
`;

export const Title = styled.p`
	font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
		Ubuntu, 'Helvetica Neue', 'Lucida Grande', sans-serif;
	box-sizing: border-box;
	font-size: 14px;
	font-weight: 400;
	margin-top: 0;
	margin-bottom: 11;
	text-transform: capitalize;
`;

export const CloseIcon = styled(IoClose)`
	font-size: 9;
	background-color: #e6e7e7;
	border-radius: 100px;
	height: 20px;
	width: 20px;
	color: #a9a9a9;
	margin-right: 20px;
`;

export const Divider = styled.div<CalendarType>`
	border: 0.5px solid #ddd;
	border: ${(props) => props.dispositive != 'DESKTOP' && '0.01px solid #ddd'};
	margin-top: 10px;
	margin-bottom: 10px;
`;

export const ButtonContainer = styled.div<CalendarType>`
	margin-left: 10px;
	margin-right: 10px;

	.bhSbQf {
		${(props) =>
			props.dispositive != 'DESKTOP' &&
			`
			min-width : 30px;
		border: 100%;
		padding-right: 5px;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		align-items: center;`}
	}
`;

export const CalendarContainer = styled.div<CalendarType>`
	margin-top: 20px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 24px;
	padding-right: 24px;
	padding-left: 24px;
	overflow: hidden;
	background-color: #ffffff;
	display: flex;
	justify-content: space-around;
	position: absolute;
	top: 80px;
	background-color: #ffffff;
	${(props) =>
		props.dispositive != 'DESKTOP' &&
		`
	margin-top: 50px;
	box-shadow: none;
	flex-direction: column;
	`}

	.CalendarDay__selected_span {
		background: #ebf4f8;
		color: #000000;
	}
	.DayPicker {
		font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI',
			Roboto, Ubuntu, 'Helvetica Neue', 'Lucida Grande', sans-serif;
		color: #000000;
		font-weight: 600;
		font-size: 10px;
		flex-grow: 1;
	}
	.DayPicker_weekHeader_li {
		color: #c6c6c6;
	}
	table {
		margin-top: 30px;
		border-collapse: initial;
	}
	.DayPicker_transitionContainer {
		padding-bottom: 30px;
		border-radius: 40px;
	}
	.DayPicker_focusRegion {
		width: 100%;
	}
	.CalendarDay {
		border: none;
	}
	.CalendarDay:hover {
		border: 2px solid #1079e3;
		border-radius: 100px;
		background-color: #ffffff;
	}
	.CalendarDay__selected_start {
		background: #1079e3;
		border-top-left-radius: 50px;
		border-bottom-left-radius: 50px;
	}
	.CalendarDay__selected_end {
		background: #1079e3;
		border-top-right-radius: 50px;
		border-bottom-right-radius: 50px;
	}
	.CalendarMonth_caption {
		font-size: 14px;
		z-index: 1;
		background: #ffffff;
	}
	.CalendarDay__selected:hover {
		background: #1079e3;
	}
	.DayPickerKeyboardShortcuts_buttonReset {
		display: none;
	}
	.DayPicker__withBorder {
		border: none;
		box-shadow: none;
	}
`;

export const CalendarButtonBack = styled(IoChevronBackSharp)`
	height: 14px;
	width: 14px;
	border-radius: 100px;
	padding: 12px;
	position: absolute;
	top: 12px;
	left: 25px;

	&:hover {
		border: 2px solid #1079e3;
		padding: 10px;
	}
`;

export const CalendarButtonNext = styled(IoChevronForwardSharp)`
	height: 14px;
	width: 14px;
	border-radius: 100px;
	position: absolute;
	padding: 12px;
	top: 12px;
	right: 25px;

	&:hover {
		border: 2px solid #1079e3;
		padding: 10px;
	}
`;

export const PlaceListContainer = styled.div<PlaceListType>`
	position: absolute;
	width: 350px;
	margin-top: 10px;
	border-radius: 30px;
	box-shadow: rgb(0 0 0 / 10%) 0px 3px 8px;
	overflow: hidden;
	padding: 20px 0px;

	${(props) =>
		props.dispositive == 'MOBILE' &&
		`position : relative;
	box-shadow: none;
	
	`}
`;

export const PlaceContainer = styled.div`
	display: flex;
	align-items: center;
	background-color: #ffffff;
	padding: 10px 30px;
	font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
		Ubuntu, 'Helvetica Neue', 'Lucida Grande', sans-serif;
	&:hover {
		cursor: pointer;
		background-color: #f7f8f8;
	}
`;

export const PlaceImage = styled.img`
	height: 45px;
	width: 45px;
	border-radius: 8px;
	background-color: red;
`;

export const PlaceContent = styled.div`
	margin-left: 20px;
`;

export const PlaceTitle = styled.p`
	font-size: 14px;
	margin: 0px;
	font-weight: 500;
`;

export const PlaceSubtitle = styled.p`
	font-size: 12px;
	margin: 0px;
	color: #666;
`;
