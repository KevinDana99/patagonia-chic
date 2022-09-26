import styled from 'styled-components';
import Spinner from '../../spinners/PrimarySpinner';

export const ButtonTertiaryStyled = styled.button`
	min-height: 20px;
	font-size: 12px;
	color: #888;
	font-weight: 400; //300
	background-color: transparent;
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
	cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

	${(props) =>
		!props.disabled
			? `&:hover {
				font-size: 12px;
				color: #0090e0;
				font-weight: 400; //300
				text-decoration: underline;
	}`
			: `&:hover`}
`;

export const SpinnerStyled = styled(Spinner)`
	margin-left: 3px;
`;
