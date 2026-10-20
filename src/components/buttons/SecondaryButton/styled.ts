import styled from 'styled-components';
import PrimarySpinner from '../../spinners/PrimarySpinner';
import Text from '../../texts/Text';
import {
	IoChevronForwardSharp,
	IoChevronBackSharp,
	IoChevronDownSharp,
	IoChevronUpSharp,
} from 'react-icons/io5';

export const ButtonSecondaryStyled = styled.button`
	min-width: 100px;
	min-height: 20px;
	text-align: left;
	white-space: nowrap;
	letter-spacing: -0.016em;
	background-color: transparent;
	color: #0090e0;
	font-size: 14px;
	font-weight: 400;
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: 1;
	cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
	${(props) =>
		!props.disabled
			? `&:hover {
				text-decoration: underline;
	}`
			: `&:hover`}
`;

export const SpinnerStyled = styled(PrimarySpinner)`
	margin-top: -4px;
	margin-left: 5px;
`;

export const StyledText = styled(Text)`
	margin-top: -2px;
`;

export const ArrowRightIcon = styled(IoChevronForwardSharp)``;

export const ArrowLeftIcon = styled(IoChevronBackSharp)``;

export const ArrowDownIcon = styled(IoChevronDownSharp)`
	margin-left: 7px;
`;

export const ArrowUpIcon = styled(IoChevronUpSharp)`
	margin-left: 7px;
`;
