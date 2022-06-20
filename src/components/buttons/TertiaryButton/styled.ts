import styled from 'styled-components';
import Spinner from '../../spinners/PrimarySpinner';

export const ButtonTertiaryStyled = styled.button`
	font-size: 12px;
	color: #888;
	font-weight: 300;
	background-color: transparent;
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	&:hover {
		font-size: 12px;
		color: #0090e0;
		font-weight: 300;
		text-decoration: underline;
	}
`;

export const SpinnerStyled = styled(Spinner)`
	margin-left: 5px;
`;
