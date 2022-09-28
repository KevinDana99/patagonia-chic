import styled from 'styled-components';
import PrimarySpinner from '../../spinners/PrimarySpinner';
import Text from '../../texts/Text';

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
	opacity: ${(props) => (props.disabled ? 0.7 : 1)};
	cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
	${(props) =>
		!props.disabled
			? `&:hover {
				text-decoration: underline;
	}`
			: `&:hover`}
`;

export const SpinnerStyled = styled(PrimarySpinner)`
	margin-left: 5px;
`;

export const StyledText = styled(Text)`
	margin-top: -2px;
`;
