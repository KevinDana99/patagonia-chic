import React from 'react';
import { ButtonTertiaryStyled, SpinnerStyled } from './styled';
import { TertiaryButtonType } from './types';
import { IoChevronForwardSharp as ForwardIcon } from 'react-icons/io5';
import Text from '../../texts/Text';

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
			<Text color="#888" size={14} weight={300}>
				{title}
			</Text>

			{loading ? <SpinnerStyled size={14} /> : <ForwardIcon />}
		</ButtonTertiaryStyled>
	);
};

export default TertiaryButton;
