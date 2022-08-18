import {
	IoClose,
	IoChevronBackSharp,
	IoChevronForwardSharp,
} from 'react-icons/io5';
import styled from 'styled-components';
import { deviceSize } from '../../../consntants/devicesSizes';
import { OptionContainerType, PlaceContainerType } from './types';

const selectedShadow =
	'12px 0px 15px -5px rgb(0 0 0 / 20%), -12px 0px 15px -5px rgb(0 0 0 / 20%);';

export const SearchQueryContainer = styled.div`
	display: inline-block;
	width: 100%;
	flex-direction: column;
`;
export const SearchQueryOptions = styled.div`
	display: inline-flex;
	box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
	border-radius: 50px;
	background: #ffffff;
	overflow: hidden;

	@media ${deviceSize.mobileL} {
		text-align: center;
		width: 100%;
	}
`;

export const OptionContainer = styled.div<
	Pick<OptionContainerType, 'isSelected'>
>`
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
	margin-top: 11px;
	@media ${deviceSize.mobileL} {
		text-align: start;
	}
`;

export const MobileLabel = styled(Label)`
	@media ${deviceSize.mobileL} {
		text-align: center;
	}
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

export const Divider = styled.div`
	border: 0.5px solid #ddd;
	border: 0.01px solid #ddd;
	margin-top: 10px;
	margin-bottom: 10px;

	@media ${deviceSize.mobileL} {
		border: none;
	}
`;

export const ButtonContainer = styled.div`
	margin-left: 10px;
	margin-right: 10px;

	@media ${deviceSize.mobileL} {
		.bhSbQf {
			margin-right: 10px;
			border: none;
			border: 100%;
			box-sizing: border-box;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.gVkBFL {
			margin: 0px;
		}
		.sc-hKMtZM .cbMybC {
			width: 20px;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}

	@media ${deviceSize.tablet} {
		.bhSbQf {
			border: none;
			border: 100%;
			margin-right: 10px;
			box-sizing: border-box;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.gVkBFL {
			margin: 0px;
		}
	}
`;

export const CalendarInputContainer = styled.div`
	display: flex;
`;

export const PlaceListMobileContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 5%;
	height: 95%;
	background-color: #ffffff;
	display: flex;
	flex-direction: column;
	align-items: center;
	top: 0px;
	z-index: 1;
	border-radius: 15px;

	@media ${deviceSize.tablet} {
		text-align: center;
		width: 80%;
		height: 50%;
		align-self: center;
	}
`;

export const CalendarDesktopContainer = styled.div`
	display: flex;
	@media ${deviceSize.mobileL} {
		display: none;
	}
	@media ${deviceSize.tablet} {
		display: none;
	}
`;

export const CalendarContainer = styled.div`
	width: 825px;

	box-shadow: rgb(0 0 0 / 10%) 0px 3px 8px !important;
	border-radius: 24px;
	padding: 20px 0;
	overflow: hidden;
	background-color: #ffffff;
	display: flex;
	justify-content: space-around;
	position: absolute;
	left: 16px;
	top: 40px;
	margin-top: 50px;

	@media ${deviceSize.mobileL} {
		margin: 0;
		box-shadow: none;
		flex-direction: column;
		position: initial;
		box-shadow: none !important;
	}

	@media ${deviceSize.tablet} {
		margin: 0;
		box-shadow: none;
		flex-direction: column;
		position: initial;
		box-shadow: none !important;
	}

	.DayPicker_weekHeader_1 {
		@media ${deviceSize.mobileL} {
			display: none;
		}
		@media ${deviceSize.tablet} {
			display: none;
		}
	}

	.CalendarDay__selected_span {
		background: #ebf4f8;
		color: #000000;
	}

	.CalendarDay__selected_span:hover {
		border: none !important;
		background: #ebf4f8 !important;
		border-radius: 0px !important;
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
		text-transform: capitalize;
	}
	.CalendarDay__selected_start:hover {
		background: #1079e3;
		border-radius: 0px;
		border-top-left-radius: 50px;
		border-bottom-left-radius: 50px;
	}
	.CalendarDay__selected_end:hover {
		background: #1079e3;
		border-radius: 0px;
		border-top-right-radius: 50px;
		border-bottom-right-radius: 50px;
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

export const PlaceListContainer = styled.div`
	position: absolute;
	width: 350px;
	margin-top: 10px;
	border-radius: 30px;
	box-shadow: rgb(0 0 0 / 10%) 0px 3px 8px;
	overflow: hidden;
	padding: 20px 0px;
	top: 80px;
	left: 20px;
	background-color: #ffffff;

	@media ${deviceSize.mobileL} {
		position: inherit;
		box-shadow: none;
		width: 100%;
		border-radius: 0px;
	}

	@media ${deviceSize.tablet} {
		position: inherit;
		box-shadow: none;
		width: 100%;
		border-radius: 0px;
	}
`;

export const PlaceContainer = styled.div<Pick<PlaceContainerType, 'selected'>>`
	display: flex;
	align-items: center;
	background-color: ${(props) => (props.selected ? '#f7f8f8' : '#ffffff')};
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

export const Input = styled.input`
	font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
		Ubuntu, 'Helvetica Neue', 'Lucida Grande', sans-serif;
	box-sizing: border-box;
	font-size: 14px;
	font-weight: 600;
	margin-top: 0;
	margin-bottom: 11px;
	color: #000000;
	border: none;
	outline: none;
	max-width: 130px;
`;

export const MobileInput = styled(Input)`
	max-width: 100%;
	text-align: center;
	margin: 0;
	z-index: 1;
	-webkit-user-select: initial;
	-khtml-user-select: initial;
	-moz-user-select: initial;
	-ms-user-select: initial;
	user-select: initial;
`;

export const CloseModalContainer = styled.div`
	display: flex;
	padding: 10px 20px;
	justify-content: flex-end;
	width: 100%;
	border-bottom: solid 1px #d3d3d3;
	margin-bottom: 20px;

	@media ${deviceSize.tablet} {
		padding: 10px 0px;
	}
`;

export const CloseModalIcon = styled(IoClose)`
	color: #d3d3d3;
	margin-right: 20px;
	font-size: 30px;
`;

export const PlaceListModal = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	position: absolute;
	background-color: rgba(35, 37, 38, 0.7);
	top: 0px;
	height: 100%;
	z-index: 1;
	left: 0px;
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

export const PlaceFilter = styled(EmptyMessage)`
	font-weight: bold;
	margin: 0px;
`;
