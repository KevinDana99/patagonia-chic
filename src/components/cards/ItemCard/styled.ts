import styled from 'styled-components';
import Text from '../../texts/Text';
import PrimaryCard from '../PrimaryCard';
import { PrimaryCardStyleType } from '../PrimaryCard/types';

export const Container = styled.div``;

export const Card = styled(PrimaryCard)<PrimaryCardStyleType>`
	padding: 36px;
	box-sizing: border-box;
	overflow: hidden;
	position: relative;
	background-color: white;
`;

export const BoxContent = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

export const BoxTitle = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export const BoxIcon = styled.div``;

export const TextItem = styled(Text)`
	margin-left: 4px;
	color: '#444444';
`;

export const TextColorItem = styled(Text)`
	color: ${({ color }) => (color ? color : '')};
	margin-left: 4px;
`;
