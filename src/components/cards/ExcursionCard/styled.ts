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

export const Title = styled.div``;

export const SubTitle = styled.div``;

export const BoxReserve = styled.div``;

export const BoxPrice = styled.div``;

export const Price = styled.div``;

export const SubPrice = styled.div``;

export const ButtonReserve = styled(PrimaryButton)`
	height: 38px;
`;
