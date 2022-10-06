import styled from 'styled-components';
import { ItemCategoryContainerType } from './types';

export const TextContainer = styled.div`
	flex: 1;
	/* background-color: red; */
	border-bottom: solid 2px rgba(0, 0, 0, 0);
	text-align: center;

	&:hover {
		border-bottom: solid 2px #717171;
	}
`;

export const Container = styled.div<ItemCategoryContainerType>`
	cursor: pointer;

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

	${TextContainer} {
		${({ selected }) =>
			selected
				? `border-bottom: solid 2px #000 !important;
			color: #000; !important`
				: ''}
	}
`;
