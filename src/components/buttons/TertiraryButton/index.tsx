import React from 'react';
import { ButtonTertiaryStyled } from './styled';
import { TertiaryButtonType } from './types';
import Spinner from '../../spinners/PrimarySpinner';
import { IoChevronForwardSharp as ForwardIcon } from 'react-icons/io5';

const TertiaryButton = ({ title, loading = false }: TertiaryButtonType) => {
	return (
		<ButtonTertiaryStyled>
			{title}

			{loading ? <Spinner size="15" marginLeft="5" /> : <ForwardIcon />}
		</ButtonTertiaryStyled>
	);
};

export default TertiaryButton;
