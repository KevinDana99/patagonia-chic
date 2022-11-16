import React from 'react';
import {
	ArrowDownIcon,
	ArrowLeftIcon,
	ArrowRightIcon,
	ArrowUpIcon,
	ButtonSecondaryStyled,
	SpinnerStyled,
	StyledText,
} from './styled';
import { SecondaryButtonType } from './types';

const SecondaryButton = ({
	title,
	loading = false,
	onClick,
	disabled = false,
	className,
	arrowIconDirection = 'right',
}: SecondaryButtonType) => {
	disabled = disabled || loading;

	const arrowDirectionSelect = () => {
		switch (arrowIconDirection) {
			case 'right':
				return <ArrowRightIcon />;

			case 'left':
				return <ArrowLeftIcon />;

			case 'bottom':
				return <ArrowDownIcon />;

			case 'top':
				return <ArrowUpIcon />;
		}
	};

	return (
		<ButtonSecondaryStyled
			disabled={disabled}
			onClick={onClick}
			className={className}
		>
			<StyledText>{title}</StyledText>
			{!loading && arrowDirectionSelect()}
			{loading && <SpinnerStyled size={17} />}
		</ButtonSecondaryStyled>
	);
};

export default SecondaryButton;
