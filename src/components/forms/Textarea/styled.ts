import styled from 'styled-components';
import { deviceSize } from '../../../constants/devicesSizes';
import { TextareaProps } from './types';

export const TextareaContainer = styled.div`
	width: 375px;
	height: 200px;
	display: inline-block;
	margin-top: 9px;
	position: relative;
	&:focus-within {
		label {
			font-size: 12px !important;
			top: 5px;
			margin-top: -5px;
			padding-top: 5px;
			padding-bottom: 3px;
		}
	}
	@media ${deviceSize.mobileL} {
		text-align: center;
		width: 100%;
	}
`;

export const StyledLabel = styled.label`
	font-size: 15px;
	line-height: 30px;
	font-weight: 300;
	letter-spacing: -0.01em;
	position: absolute;
	top: 15px;
	left: 10px;
	color: #777;
	pointer-events: none;
	padding: 0 0 0 8px;
	transition: all 80ms linear;
	z-index: 1;
`;

export const StyledTextarea = styled.textarea<TextareaProps>`
	font-size: 17px;
	line-height: 17px;
	font-weight: 400;
	letter-spacing: -0.022em;
	display: block;
	box-sizing: border-box;
	width: 100%;
	color: #333;
	padding: 15px 30px 0 18px;
	text-align: left;
	background: #fff;
	border: none;
	border-bottom: 1px solid #ddd;
	border-radius: 4px;
	margin-bottom: 9px;
	min-height: 60px;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 6px 40px !important;
	user-select: auto !important;
	resize: none;
	padding-top: 30px !important;
	height: calc(100% - 18px) !important;
	outline: none !important;
	border: ${(props) => (!props.error ? 'none' : '2px solid #EA3030')};

	&:focus {
		border: ${(props) =>
			!props.error ? '2px solid #0077B9' : '2px solid #EA3030'};
		padding: 14px 30px 0 16px;
		overflow: hidden;
	}
	&:not(:placeholder-shown) + ${StyledLabel} {
		font-size: 12px !important;
		top: 5px;
		margin-top: -5px;
		padding-top: 5px;
		padding-bottom: 3px;
	}
`;
