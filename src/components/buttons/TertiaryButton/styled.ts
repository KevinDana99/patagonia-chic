import styled from 'styled-components';
import Spinner from '../../spinners/PrimarySpinner';
import Text from '../../texts/Text';

export const ButtonTertiaryStyled = styled.button`
	min-height: 20px;
	font-size: 12px;
	color: #888;
	font-weight: 400;
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
				color: #0090e0;
				text-decoration: underline;
	}`
			: `&:hover`}
`;

export const StyledText = styled(Text)`
	margin-top: -1.5px;
`;

export const SpinnerStyled = styled(Spinner)`
	margin-left: 3px;
`;
