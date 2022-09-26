import React from 'react';
import { ButtonSecondaryStyled, SpinnerStyled } from './styled';
import { SecondaryButtonType } from './types';
import { IoChevronForwardSharp as ForwardIcon } from 'react-icons/io5';
import Text from '../../texts/Text';

const SecondaryButton = ({
	title,
	loading = false,
	onClick,
	disabled = false,
}: SecondaryButtonType) => {
	disabled = disabled || loading;
	return (
		<ButtonSecondaryStyled disabled={disabled} onClick={onClick}>
			<Text>{title}</Text>

			{loading ? <SpinnerStyled size={17} /> : <ForwardIcon />}
		</ButtonSecondaryStyled>
	);
};

export default SecondaryButton;
