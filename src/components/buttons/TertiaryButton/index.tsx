import React from 'react';
import { ButtonTertiaryStyled, SpinnerStyled, StyledText } from './styled';
import { TertiaryButtonType } from './types';
import { IoChevronForwardSharp as ForwardIcon } from 'react-icons/io5';

const TertiaryButton = ({
	title,
	loading = false,
	onClick,
	disabled = false,
	className,
	children,
}: TertiaryButtonType) => {
	disabled = disabled || loading;
	return (
		<ButtonTertiaryStyled
			disabled={disabled}
			onClick={onClick}
			className={className}
		>
			{title && <StyledText>{title}</StyledText>}
			{children}
			{loading ? <SpinnerStyled size={14} /> : <ForwardIcon />}
		</ButtonTertiaryStyled>
	);
};

export default TertiaryButton;
