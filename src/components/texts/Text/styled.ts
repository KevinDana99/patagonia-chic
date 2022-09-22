import styled from 'styled-components';
import fontsConstants from '../../../constants/fonts.json';
import { StyledTextPropsType } from './types';

const fontWeightsMap = {
	'ultra-light': 100,
	regular: 400,
	medium: 500,
	'semi-bold': 600,
	bold: 700,
	heavy: 800,
};

export const StyledText = styled.span<StyledTextPropsType>`
	font-family: ${({ fontFamily }) => fontFamily},
		${fontsConstants.defaultFontName};
	font-size: ${({ size }) => size}px;
	font-weight: ${({ weight }) => fontWeightsMap[`${weight}`]};
	color: ${({ color }) => color};
	font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
`;
