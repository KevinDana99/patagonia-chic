import React, { FC, useEffect } from 'react';
import { StyledButton } from './styled';
import { ButtonProps } from './types';

const Button: FC<ButtonProps> = ({
	size,
	primary,
	disabled,
	text,
	onClick,
	loading = false,
	onLoadEnd,
	...props
}) => {
	const [wasLoading, setWasLoading] = React.useState(false);

	useEffect(() => {
		if (!wasLoading && loading) {
			setWasLoading(true);
		} else if (wasLoading && !loading) {
			onLoadEnd && onLoadEnd();
		}
	}, [loading]);

	return (
		<StyledButton
			type="button"
			onClick={onClick}
			primary={primary}
			disabled={disabled}
			size={size}
			{...props}
		>
			{text}
			{loading && <span>⚙️</span>}
		</StyledButton>
	);
};

export default Button;
