import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';
import fontsConstants from '../../../../../constants/fonts.json';
import Text from '../../../../texts/Text';

const selectedShadow =
	'12px 0px 15px -5px rgb(0 0 0 / 20%), -12px 0px 15px -5px rgb(0 0 0 / 20%);';

export const Container = styled.div<{ isFocused: boolean }>`
	height: 100%;
	display: flex;
	align-items: center;
	flex: 1;
	position: relative;
	box-shadow: ${({ isFocused }) => (isFocused ? selectedShadow : 'none')};
	cursor: text;
`;

export const Label = styled(Text)`
	font-size: 12px;
	font-weight: 600;
	position: absolute;
	top: 11px;
	left: 30px;
`;

export const TextInput = styled.input.attrs({
	type: 'text',
})`
	width: 100%;
	height: 100%;
	padding: 20px 40px 10px 30px;
	font-family: ${fontsConstants.defaultFontName}, -apple-system, system-ui,
		BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue',
		'Lucida Grande', sans-serif;
	box-sizing: border-box;
	font-size: 14px;
	font-weight: 600;
	color: #000000;
	border: none;
	outline: none;
	box-shadow: none;
`;

export const CloseIcon = styled(IoClose)`
	font-size: 9;
	background-color: #e6e7e7;
	border-radius: 100px;
	height: 20px;
	width: 20px;
	color: #a9a9a9;
	position: absolute;
	top: 22px;
	right: 10px;
	cursor: pointer;
`;
