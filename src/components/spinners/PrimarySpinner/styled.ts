import styled from 'styled-components';
import { PrimarySpinnerType } from './types';

export const SpinnerStyled = styled.img<PrimarySpinnerType>`
	margin-left: ${(props) =>
		props.marginLeft ? props.marginLeft + 'px' : 'none'};
	margin-right: ${(props) =>
		props.marginRight ? props.marginRight + 'px' : 'none'};
	margin-top: ${(props) => (props.marginTop ? props.marginTop + 'px' : 'none')};
	margin-bottom: ${(props) =>
		props.marginBottom ? props.marginBottom + 'px' : 'none'};
	height: ${(props) => props.size + 'px'};
`;
