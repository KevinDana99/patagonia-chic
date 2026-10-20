import styled from 'styled-components';
import { PrimaryCardStyleType } from './types';

export const Container = styled.div<PrimaryCardStyleType>`
	padding: 36px;
	box-sizing: border-box;
	border-radius: 12px;
	width: 330px;
	height: 240px;
	min-width: 150px;
	min-height: 100px;
	box-shadow: 2px 4px 12px rgb(0 0 0 / 8%);
	transition: all 0.2s cubic-bezier(0.235, 0, 0.05, 0.95);
	display: flex;
	flex-direction: column;
	${(props) =>
		props.hover &&
		`&:hover {
		box-shadow: 0 2rem 5rem 0 rgb(0 0 0 / 15%);
		transform: perspective(1px) scale3d(1.018, 1.018, 1) translateZ(0);
	}`}
`;
