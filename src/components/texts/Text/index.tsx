import React from 'react';
import { TextPropsType } from './types';
import fontsConstants from '../../../constants/fonts.json';
import { StyledText } from './styled';

const Text = ({
	className,
	children,
	fontFamily = fontsConstants.defaultFontName,
	size,
	color,
	weight,
	italic = false,
	center = false,
	right = false,
	style,
}: TextPropsType) => (
	<StyledText
		style={style}
		className={className}
		fontFamily={fontFamily}
		size={size}
		color={color}
		weight={weight}
		italic={italic}
		center={center}
		right={right}
	>
		{children}
	</StyledText>
);

export default Text;
