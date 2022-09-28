import React from 'react';
import { IconType } from 'react-icons';

export type PrimaryButtonType = {
	title: string;
	loading?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	disabled?: boolean;
	IconComponent?: IconType;
	className?: string;
	theme: 'color' | 'mono';
	color?: string;
};

export type PrimaryButtonLightType = {
	color: string;
};
