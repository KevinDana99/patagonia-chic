import { BsCheck2 } from 'react-icons/bs';
import styled from 'styled-components';
import { OptionalListItemContainer } from './types';

export const Container = styled.div<
	Pick<OptionalListItemContainer, 'disabled'>
>`
	display: flex;
	flex-direction: column;
	border-radius: 15px;
	border: solid 1px #dddddd;
	padding: 1px 1px;
	width: fit-content;
	margin: 15px 0px;
	cursor: pointer;
	min-width: 340px;
	justify-content: center;
	opacity: ${(props) => (props.disabled ? 0.6 : 1)};
	pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};

	&:hover {
		border: solid 2px #0077b9;
		padding: 0px;
	}
`;

export const ItemContent = styled.div`
	display: flex;
	padding: 20px;
`;

export const InputContainer = styled.div<
	Pick<OptionalListItemContainer, 'selected'>
>`
	height: 20px;
	width: 20px;
	border-radius: 100px;
	border: 2px solid #0077b9;
	background: ${(props) =>
		props.selected ? '#0077B9 !important' : 'transparent'};
	display: flex;
	align-items: center;

	${Container}:hover & {
		background: #d6d6d6;
		border-color: ${(props) =>
			props.selected ? '#0077B9' : 'transparent !important'};
	}
`;

export const Label = styled.div`
	padding: 0px 20px;
	width: 140px;
	cursor: pointer;
	display: flex;
	justify-content: center;
	flex-direction: column;
`;

export const Title = styled.p`
	font-weight: 500;
	font-size: 16px;
	margin: 0px;
`;

export const Description = styled.p`
	font-weight: 200;
	font-size: 12px;
	margin: 10px 0px 0px 0px;
`;

export const InformationButtonContainer = styled.div`
	& > button {
		padding: 0px !important;
	}
	margin-top: 4px;
`;

export const PriceContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-self: center;
`;

export const Price = styled.p`
	font-size: 14;
	font-weight: 500;
	color: #01c0f4;
	margin: 0px;
`;

export const PriceDescription = styled.p`
	font-size: 9px;
	font-weight: 300;
	margin: 3px 0px;
	text-align: center;
`;
export const CheckIcon = styled(BsCheck2)<
	Pick<OptionalListItemContainer, 'selected'>
>`
	color: #ffffff;
	display: ${(props) => (props.selected ? 'block' : 'none')};
`;

export const Footer = styled.div`
	border-top: solid 1px #e1e1e1;
	padding: 15px 0px;
	display: flex;
	justify-content: center;
`;

export const MoreInformation = styled.div`
	border-top: solid 1px #e1e1e1;
	padding: 15px 0px;
	max-width: 340px;
`;
