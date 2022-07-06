import React from 'react';

export type PrimaryButtonType = {
	title: string;
	loading?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	disabled?: boolean;
	className?: string;
};
