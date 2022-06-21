import React from 'react';
import { ButtonSecondaryStyled, SpinnerStyled } from './styled';
import { SecondaryButtonType } from './types';
import { IoChevronForwardSharp as ForwardIcon } from 'react-icons/io5';

const SecondaryButton = ({
	title,
	loading = false,
	onClick,
}: SecondaryButtonType) => {
	return (
		<ButtonSecondaryStyled onClick={onClick}>
			{title}

			{loading ? <SpinnerStyled size={17} /> : <ForwardIcon />}
		</ButtonSecondaryStyled>
	);
};

export default SecondaryButton;
