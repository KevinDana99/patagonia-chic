import styled from 'styled-components';

export const IconDiv = styled.div`
	width: 15px;
	min-width: 15px;
	height: 15px;
	margin: 14px 24px;
	text-align: center;
	display: inline-block;
	content: '' !important;
	border: 2px solid #0077b9;
	background-color: #fff;
	cursor: pointer;
	border-radius: 4px;
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
			background-color: #fff;
			background-image: url("data:image/svg+xml,%3Csvg width='28' height='28' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E ");
			background-repeat: no-repeat;
			background-position: -2px -2px;
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
