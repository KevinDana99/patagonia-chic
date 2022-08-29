import React from 'react';
import { ButtonTertiaryStyled, SpinnerStyled } from './styled';
import { TertiaryButtonType } from './types';
import { IoChevronForwardSharp as ForwardIcon } from 'react-icons/io5';
import { withFontStyles } from '../../../helpers/hocs/withFontStyles';

const TertiaryButton = ({
	title,
	loading = false,
	onClick,
	disabled = false,
	className,
}: TertiaryButtonType) => {
	disabled = disabled || loading;
	return (
		<ButtonTertiaryStyled
			disabled={disabled}
			onClick={onClick}
			className={className}
		>
			{title}

			{loading ? <SpinnerStyled size={14} /> : <ForwardIcon />}
		</ButtonTertiaryStyled>
	);
};

export default withFontStyles(TertiaryButton);
