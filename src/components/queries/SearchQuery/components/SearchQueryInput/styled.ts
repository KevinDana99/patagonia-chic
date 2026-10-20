import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';
import fontsConstants from '../../../../../constants/fonts.json';
import Text from '../../../../texts/Text';
import { InputContainerType, TextInputType } from './types';
import CustomIcon from '../../../../graphics/CustomIcon';

const selectedShadow =
	'12px 0px 15px -5px rgb(0 0 0 / 20%), -12px 0px 15px -5px rgb(0 0 0 / 20%);';

export const Container = styled.div<InputContainerType>`
	height: 100%;
	display: flex;
	background-color: transparent;
	align-items: center;
	flex: 1;
	position: relative;
	${({ isFocused }) =>
		isFocused ? `box-shadow: ${selectedShadow}; z-index: 5;` : ''};
	cursor: ${({ onlyClick }) => (onlyClick ? 'pointer' : 'text')};
	user-select: none;

	&:hover {
		background-color: #fff;
	}

	&:not(:first-child)::before {
		content: '';
		position: absolute;
		left: 0;
		top: 23%;
		height: 54%;
		width: 1px;
		background-color: #ddd;
	}

	&:hover::before,
	&:hover::after,
	&:hover + ::before {
		visibility: hidden;
	}

	&:nth-last-child(2)::after {
		content: '';
		position: absolute;
		right: 0;
		top: 23%;
		height: 54%;
		width: 1px;
		background-color: #ddd;
	}

	${({ isFocused }) =>
		isFocused
			? `
			&::before,
			&::after,
			& + ::before {
				visibility: hidden;
			}
		`
			: ''}
`;

export const Label = styled(Text)`
	font-size: 12px;
	font-weight: 600;
	position: absolute;
	color: #222;
	top: 13px;
	left: 30px;
	text-overflow: ellipsis;
`;

export const TextInput = styled.input.attrs({
	type: 'text',
})<TextInputType>`
	width: 100%;
	height: 100%;
	padding: 26px 40px 10px 30px;
	font-family: ${fontsConstants.defaultFontName}, -apple-system, system-ui,
		BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue',
		'Lucida Grande', sans-serif;
	box-sizing: border-box;
	font-size: 14px;
	font-weight: 600;
	color: #000000;
	background-color: transparent;
	border: none;
	cursor: pointer;
	outline: none;
	box-shadow: none;
	text-overflow: ellipsis;
	${({ onlyClick }) => (onlyClick ? 'pointer-events: none' : '')};

	::-webkit-input-placeholder {
		/* Edge */
		font-weight: 200;
		color: ${({ isError }) => (isError ? '#f00' : '#777')};
		font-size: 14px;
	}

	:-ms-input-placeholder {
		/* Internet Explorer 10-11 */
		font-weight: 200;
		color: ${({ isError }) => (isError ? '#f00' : '#777')};
		font-size: 14px;
	}

	::placeholder {
		font-weight: 200;
		color: ${({ isError }) => (isError ? '#f00' : '#777')};
		font-size: 14px;
	}
`;

export const CloseIcon = styled(CustomIcon).attrs({
	name: 'close',
	size: 9,
})`
	background-color: #e6e7e7;
	border-radius: 100px;
	height: 20px;
	width: 20px;
	color: #a9a9a9;
	position: absolute;
	top: 22px;
	right: 10px;
	cursor: pointer;

	&:hover {
		background-color: #dbdcdc;
	}
`;
