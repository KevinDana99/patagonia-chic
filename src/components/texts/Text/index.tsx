import React from 'react';
import { TextPropsType } from './types';
import fontsConstants from '../../../constants/fonts.json';
import { StyledText } from './styled';

const Text = ({
	className,
	children,
	fontFamily = fontsConstants.defaultFontName,
	size = 14,
	color = '#000',
	weight = 'regular',
	italic = false,
}: TextPropsType) => (
	<StyledText
		className={className}
		fontFamily={fontFamily}
		size={size}
		color={color}
		weight={weight}
		italic={italic}
	>
		{children}
	</StyledText>
);

export default Text;
