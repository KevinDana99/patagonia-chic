import styled from 'styled-components';
import fontsConstants from '../../../constants/fonts.json';
import { StyledTextPropsType } from '../../../types/fontTypes';

const fontWeightsMap = {
	'ultra-light': 100,
	'medium-light': 200,
	light: 300,
	regular: 400,
	medium: 500,
	'semi-bold': 600,
	bold: 700,
	heavy: 800,
};

export const StyledText = styled.span<StyledTextPropsType	>`
	font-family: ${({ fontFamily }) => fontFamily},
		${fontsConstants.defaultFontName}, -apple-system, system-ui,
		BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue',
		'Lucida Grande', sans-serif;
	${({ size }) => (size ? `font-size: ${size}px;` : '')}
	${({ weight }) =>
		weight ? `font-weight: ${fontWeightsMap[`${weight}`]};` : ''}
	${({ color }) => (color ? `color: ${color};` : '')}
	font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
	${({ right }) => (right ? `text-align: right !important;` : '')}
	${({ center }) => (center ? `text-align: center;` : '')}
`;
