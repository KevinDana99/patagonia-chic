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
	textLoadingButton?: string;
	icon?: boolean;
	width?: number | string;
	height?: number | string;
};

export type PrimaryButtonStyledType = {
	color?: string;
	width?: number | string;
	height?: number | string;
};

export type PrimaryButtonLightType = {
	color?: string;
	width?: number | string;
	height?: number | string;
};
