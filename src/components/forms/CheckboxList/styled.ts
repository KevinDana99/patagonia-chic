import styled from 'styled-components';
import CustomIcon from '../../graphics/CustomIcon';

export const IconDiv = styled.div`
	width: 15px;
	height: 15px;
	margin: 14px 24px;
	text-align: center;
	display: inline-block;
	border: 2px solid #0077b9;
	background-color: #fff;
	cursor: pointer;
	border-radius: 4px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const CheckIcon = styled(CustomIcon)`
	display: none;
	padding-top: 2px;
`;

export const StyledLabel = styled.label`
	font-size: 15px;
	line-height: 30px;
	font-weight: 300;
	letter-spacing: -0.01em;

	top: 15px;
	left: 10px;
	color: #777;
	padding: 0 0 0 8px;
	transition: all 80ms linear;
	z-index: 1;
	:hover {
		${IconDiv} {
			background-color: #d1d7dc;
			border-color: #d1d7dc;
		}
	}
`;

export const ContainerInput = styled.div`
	position: relative;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	text-align: left;
	cursor: pointer;
	label {
		display: inline-flex;
		cursor: pointer;
	}
	input:checked ~ label {
		${IconDiv} {
			background-color: #0077b9 !important;
			border-color: #0077b9 !important;
			display: flex;
		}
		${CheckIcon} {
			display: initial;
		}
	}
`;

export const StyledInput = styled.input`
	display: none;
`;

export const TextDiv = styled.div`
	text-align: left;
	color: #333;
	font-size: 17px;
	line-height: 17px;
	font-weight: 400;
	letter-spacing: -0.022em;
	margin: 15px 24px 13px 0;
	display: inline-flex;
	cursor: pointer;
`;
