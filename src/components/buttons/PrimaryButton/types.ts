import { IconType } from 'react-icons';
import { onClickButtonType } from '../../../types/eventTypes';
import { StyleColorType } from '../../../types/styleTypes';

export type PrimaryButtonType = {
	title: string;
	loading?: boolean;
	onClick?: onClickButtonType;
	disabled?: boolean;
	IconComponent?: IconType;
	className?: string;
	theme: 'color' | 'mono';
	color?: StyleColorType;
};

export type PrimaryButtonLightType = {
	color: StyleColorType;
};
