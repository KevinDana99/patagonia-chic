import styled from 'styled-components';
import PrimaryButton from '../../buttons/PrimaryButton';
import PrimaryCard from '../PrimaryCard';
import { PrimaryCardStyleType } from '../PrimaryCard/types';
import { ExcursionCardStyleType } from './types';
import StainVector from './vectors/StainVector';

export const Container = styled.div``;

export const Card = styled(PrimaryCard)<PrimaryCardStyleType>`
	width: 335px;
	height: 365px;
	padding: 0px;
	overflow: hidden;
`;

export const ContainerImage = styled.div<ExcursionCardStyleType>`
	width: 100%;
	height: 235px;
	background-image: url(${(props) => props.coverImage && props.coverImage});
	object-fit: ${(props) => props.coverImage && 'cover'};
	background-repeat: ${(props) => props.coverImage && 'no-repeat'};
	background-position: center;
`;

export const ContainerVector = styled.div`
	display: flex;
	justify-content: flex-end;
`;

export const VectorCard = styled(StainVector)`
	position: relative;
`;

export const Description = styled.div`
	min-height: 110px;
	padding: 21.48px;
	padding-bottom: 14.33px;
`;

export const BoxTitle = styled.div``;

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

export const Price = Title;

export const Currency = styled.div`
	margin-left: 2px;
	text-transform: uppercase;
	font-size: 10px;
`;

export const SubPrice = styled(SubTitle)`
	text-decoration: line-through;
`;

export const ButtonContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
`;

export const ButtonReserve = styled(PrimaryButton)`
	height: 38px;
`;

export const ActiveTheme = '#3BC053';

export const ActiveButton = styled(ButtonReserve)`
	width: 116px;
	height: 42px;
	background-image: none;
	background-color: transparent;
	color: #3b3b3b;
	border: solid 3px #3b3b3b;
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

export const OptionContainer = styled.div`
	margin-top: 28px;
`;
export const BoxOption = styled.div`
	margin-top: 8px;
	margin-left: 22px;
	display: flex;
	align-items: center;
`;
export const Option = styled.div`
	margin-left: 4px;
	font-size: 12px;
`;
