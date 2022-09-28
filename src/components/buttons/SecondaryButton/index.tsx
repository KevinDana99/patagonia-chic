import React from 'react';
import { ButtonSecondaryStyled, SpinnerStyled, StyledText } from './styled';
import { SecondaryButtonType } from './types';
import { IoChevronForwardSharp as ForwardIcon } from 'react-icons/io5';

const SecondaryButton = ({
	title,
	loading = false,
	onClick,
	disabled = false,
}: SecondaryButtonType) => {
	disabled = disabled || loading;
	return (
		<ButtonSecondaryStyled disabled={disabled} onClick={onClick}>
			<StyledText>{title}</StyledText>

			{loading ? <SpinnerStyled size={17} /> : <ForwardIcon />}
		</ButtonSecondaryStyled>
	);
};

export default SecondaryButton;
