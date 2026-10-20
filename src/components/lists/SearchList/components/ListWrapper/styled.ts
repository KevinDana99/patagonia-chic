import styled from 'styled-components';
import { ItemListStyleType } from '../../types';

export const LoadingContainer = styled.div<ItemListStyleType>`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: flex;
	padding: ${({ edgesItemsAddedPadding }) => 10 + edgesItemsAddedPadding}px
		${({ horizontalPadding }) => horizontalPadding}px;
	box-sizing: border-box;
`;
