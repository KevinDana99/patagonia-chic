import styled from 'styled-components';
import PrimaryButton from '..';
import { PrimaryButtonType } from '../types';

export const PrimaryButtonLight = styled(PrimaryButton)<PrimaryButtonType>`
	width: 195px;

	background-image: none;
	background-color: transparent;
	color: #3b3b3b;
	border: solid 3px #3b3b3b;
`;
