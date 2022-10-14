import styled from 'styled-components';
import PrimaryButton from '../../../../buttons/PrimaryButton';

export const Description = styled.div`
	min-height: 110px;
	padding: 21.48px;
	padding-bottom: 14.33px;
`;

export const TitleContainer = styled.div``;

export const Title = styled.div`
	font-weight: bold;
	font-size: 15.34px;
	display: flex;
`;

export const SubTitle = styled.div`
	color: #888888;
	font-size: 12.27px;
	font-weight: 400;
	display: flex;
`;

export const BoxReserve = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const BoxPrice = styled.div``;

export const Price = styled(Title)``;

export const SubPrice = styled(SubTitle)`
	text-decoration: line-through;
`;

export const ButtonReserve = styled(PrimaryButton)`
	height: 38px;
	max-width: 116px;
`;

export const Currency = styled.div`
	margin-left: 2px;
	text-transform: uppercase;
	font-size: 10px;
`;


export const ActiveButton = styled(PrimaryButton).attrs({
	theme: 'mono',
})`
	width: 116px;
	height: 42px;
`;

export const DescriptionActive = styled.div`
	min-width: 155px;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;


export const Details = styled(SubTitle)`
	text-align: left;
	margin-left: 5px;
`;

export const ButtonContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
`;