import { ButtonTertiaryStyled } from './styled';
import { TertiaryButtonType, Hover } from './types';
import React, { useState } from 'react';
import Spinner from '../../spinners/PrimarySpinner';
import { IoChevronForwardSharp as ForwardIcon } from 'react-icons/io5';

const TertiaryButton = ({ title, loading = false }: TertiaryButtonType) => {
	const [state, setState] = useState<Hover>({
		hover: false,
	});

	return (
		<ButtonTertiaryStyled
			hover={state.hover}
			onMouseOver={() => setState({ ...state, hover: true })}
			onMouseOut={() => setState({ ...state, hover: false })}
		>
			{title}

			{loading ? <Spinner size="15" marginLeft="5" /> : <ForwardIcon />}
		</ButtonTertiaryStyled>
	);
};

export default TertiaryButton;
