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
	children,
}: TertiaryButtonType) => {
	disabled = disabled || loading;
	return (
		<ButtonTertiaryStyled
			disabled={disabled}
			onClick={onClick}
			className={className}
		>
			{title && (
				<Text color="#888" size={14} weight={'regular'}>
					{title}
				</Text>
			)}

			{children && children}

			{loading ? <SpinnerStyled size={14} /> : <ForwardIcon />}
		</ButtonTertiaryStyled>
	);
};

export default TertiaryButton;
