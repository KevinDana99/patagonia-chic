import styled from 'styled-components';
import { LogoType } from './types';

export const Container = styled.div<Omit<LogoType, 'size'>>`
	width: ${(props) => (props.containerFullWidth ? '100%' : 'fit-content')};
	display: flex;
	justify-content: ${(props) =>
		props.containerFullWidth && props.align ? props.align : 'left'};
`;
