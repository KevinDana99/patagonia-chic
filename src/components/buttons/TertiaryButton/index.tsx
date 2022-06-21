import React from 'react';
import { ButtonTertiaryStyled, SpinnerStyled } from './styled';
import { TertiaryButtonType } from './types';
import { IoChevronForwardSharp as ForwardIcon } from 'react-icons/io5';

const TertiaryButton = ({
	title,
	loading = false,
	onClick,
}: TertiaryButtonType) => {
	return (
		<ButtonTertiaryStyled disabled={loading} onClick={onClick}>
			{title}

			{loading ? <SpinnerStyled size={14} /> : <ForwardIcon />}
		</ButtonTertiaryStyled>
	);
};

export default TertiaryButton;
