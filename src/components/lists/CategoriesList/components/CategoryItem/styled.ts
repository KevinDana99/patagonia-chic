import styled from 'styled-components';
import { ItemCategoryContainerType } from './types';

export const Container = styled.div<ItemCategoryContainerType>`
	padding-bottom: 10px;
	width: 90px;
	height: 58px;
	cursor: pointer;
	color: #717171;
	border-bottom: solid 2px rgba(0, 0, 0, 0);
	${({ selected }) => (selected ? 'border-bottom: solid 5px #383838;' : '')}
	${({ disabled }) =>
		disabled ? 'opacity: 0.5; pointer-events: none; cursor: not-allowed;' : ''}
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	-webkit-touch-callout: none; /* iOS Safari */
	-webkit-user-select: none; /* Safari */
	-khtml-user-select: none; /* Konqueror HTML */
	-moz-user-select: none; /* Old versions of Firefox */
	-ms-user-select: none; /* Internet Explorer/Edge */
	user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */

	&:hover {
		border-bottom: solid 2px #717171;
	}

	${({ selected }) =>
		selected
			? `border-bottom: solid 2px #000 !important;
			color: #000; !important`
			: ''}
`;

export const ItemText = styled.div`
	font-size: 14px;
	text-align: center;
`;
