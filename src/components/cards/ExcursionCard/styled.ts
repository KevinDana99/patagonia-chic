import styled from 'styled-components';
import PrimaryButton from '../../buttons/PrimaryButton';
import PrimaryCard from '../PrimaryCard';
import { PrimaryCardStyleType } from '../PrimaryCard/types';
import { ExcursionCardStyleType } from './types';
import VectorBlue from './vectors/VectorBlue';

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
`;

export const VectorBlueTop = styled(VectorBlue)`
	position: relative;
	transform: translateX(200px);
`;

export const Description = styled.div`
	padding: 21.48px;
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

export const ButtonReserve = styled(PrimaryButton)`
	height: 38px;
`;
