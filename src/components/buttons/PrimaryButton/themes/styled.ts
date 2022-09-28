import styled from 'styled-components';
import { ButtonPrimaryStyled } from '../styled';
import { PrimaryButtonLightType } from '../types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const PrimaryButtonLight: any = styled(
	ButtonPrimaryStyled
)<PrimaryButtonLightType>`
	background-image: none;
	background-color: transparent;
	color: ${({ color }) => color};
	border: solid 3px ${({ color }) => color};
`;
