import styled from 'styled-components';
import PrimaryCard from '../PrimaryCard';
import { PrimaryCardStyleType } from '../PrimaryCard/types';
import { ExcursionCardStyleType } from './types';

export const Container = styled.div``;

export const Card = styled(PrimaryCard)<PrimaryCardStyleType>`
	width: 335px;
	height: 365px;
`;

export const ContainerImage = styled.div<ExcursionCardStyleType>`
	width: 100%;
	height: 235px;
	background-color: red;
`;
