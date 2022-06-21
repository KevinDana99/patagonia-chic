import styled from 'styled-components';
import PrimarySpinner from '../../spinners/PrimarySpinner';

export const ButtonSecondaryStyled = styled.button`
	min-width: 100px;
	min-height: 20px;
	text-align: left;
	white-space: nowrap;
	letter-spacing: -0.01em;
	background-color: transparent;
	color: #0090e0;
	font-size: 14px;
	font-weight: 400;
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
`;

export const SpinnerStyled = styled(PrimarySpinner)`
	margin-left: 5px;
`;
