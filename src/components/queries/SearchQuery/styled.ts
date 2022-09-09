import { IoClose, IoSearch } from 'react-icons/io5';
import styled from 'styled-components';
import { size } from '../../../constants/devicesSizes';
import PrimaryButton from '../../buttons/PrimaryButton';
import { DisableSearchType, OptionContainerType } from './types';

const selectedShadow =
	'12px 0px 15px -5px rgb(0 0 0 / 20%), -12px 0px 15px -5px rgb(0 0 0 / 20%);';

export const Container = styled.div`
	width: 100%;
	max-width: 875px;
`;

export const SearchQueryContainer = styled.div`
	overflow: hidden;
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

export const OptionContent = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
`;

export const Label = styled.p`
	font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
		Ubuntu, 'Helvetica Neue', 'Lucida Grande', sans-serif;
	box-sizing: border-box;
	font-size: 12px;
	font-weight: 600;
	margin-bottom: 0;
	margin-top: 11px;
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
`;

export const ButtonContainer = styled.div`
	margin-left: 10px;
	margin-right: 10px;
`;

export const ButtonSearch = styled(PrimaryButton)`
	min-width: 180px;
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

export const Input = styled.input<DisableSearchType>`
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

	&::placeholder {
		color: ${(props) => props.disableSearch && 'red'};
		font-weight: 100;
	}
`;
