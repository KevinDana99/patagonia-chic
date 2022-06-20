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
		<ButtonTertiaryStyled onClick={onClick}>
			{title}

			{loading ? <SpinnerStyled size={15} /> : <ForwardIcon />}
		</ButtonTertiaryStyled>
	);
};

export default TertiaryButton;
