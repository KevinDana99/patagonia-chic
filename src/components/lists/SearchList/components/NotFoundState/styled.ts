import styled from 'styled-components';
import {
	defaultFontName,
	auxFontsValue,
} from '../../../../../constants/fonts.json';

export const Container = styled.div`
	max-width: 100%;
	padding: 40px 20px;
	text-align: center;
`;

export const StyledText = styled.div`
	font-family: ${defaultFontName + ' ' + auxFontsValue};
	font-size: 16px;
`;
