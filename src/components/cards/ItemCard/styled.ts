import styled from 'styled-components';
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

export const BoxTitle = styled.div``;

export const BoxIcon = styled.div``;
