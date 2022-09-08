import React from 'react';
import { TextPropsType } from './types';
import fontsConstants from '../../../consntants/fonts.json';
import { StyledText } from './styled';
import SFProTextGlobalStyle from './fontGlobalStyles/SFProText';

const Text = ({
	className,
	children,
	fontFamily = fontsConstants.defaultFontName,
	size = 14,
	color = '#000',
	weight = 'regular',
	italic = false,
}: TextPropsType) => {
	return (
		<>
			<SFProTextGlobalStyle />
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
		</>
	);
};

export default Text;
