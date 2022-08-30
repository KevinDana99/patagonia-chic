import styled from 'styled-components';
import { CustomIconType, CustomStyleIconType } from './types';

export const Container = styled.div<CustomStyleIconType>`
	svg {
		color: ${(props) => props.color && props.color};
		width: ${(props) => props.size && props.size};
		height: ${(props) => props.size && props.size};
	}

	path {
		fill: ${(props) => props.color && props.color};
	}
`;
