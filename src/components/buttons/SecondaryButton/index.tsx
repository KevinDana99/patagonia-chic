import React from 'react';
import Spinner from '../../spinners/PrimarySpinner';
import { ButtonSecondaryStyled } from './styled';
import { SecondaryButtonType } from './types';
import { IoChevronForwardSharp as ForwardIcon } from 'react-icons/io5';

const SecondaryButton = ({ title, loading = false }: SecondaryButtonType) => {
	return (
		<ButtonSecondaryStyled>
			{title}

			{loading ? <Spinner size="17" marginLeft="5" /> : <ForwardIcon />}
		</ButtonSecondaryStyled>
	);
};

export default SecondaryButton;
