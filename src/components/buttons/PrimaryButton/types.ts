import { IconType } from 'react-icons';
import { onClickButtonType } from '../../../types/eventTypes';

export type PrimaryButtonType = {
	title: string;
	loading?: boolean;
	onClick?: onClickButtonType;
	disabled?: boolean;
	IconComponent?: IconType;
	className?: string;
	theme?: 'color' | 'mono';
	color?: string;
	invertGradient?: boolean;
	textLoadingButton?: string;
	icon?: boolean;
	width?: number | string;
	height?: number | string;
};

export type ButtonPrimaryStyledPropsType = {
	disabled: boolean;
	invertGradient: boolean;
	color?: string;
	width?: number | string;
	height?: number | string;
};

export type PrimaryButtonLightType = {
	color?: string;
	width?: number | string;
	height?: number | string;
};
