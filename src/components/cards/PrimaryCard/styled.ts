import styled from 'styled-components';
import { PrimaryCardStyleType, PrimaryCardType } from './types';

export const Container = styled.div<PrimaryCardStyleType>`
	min-width: 150px;
	min-height: 100px;
	width: ${(props) => (props.width ? props.width + 'px' : '195px')};
	height: ${(props) => (props.height ? props.height + 'px' : '229px')};
	box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);
	border-radius: 15px;
	display: flex;
	flex-direction: column;
`;
