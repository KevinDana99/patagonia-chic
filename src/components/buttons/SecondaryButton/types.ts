import { onClickButtonType } from '../../../types/eventTypes';

export type SecondaryButtonType = {
	title: string;
	arrowIconDirection: 'right' | 'left' | 'bottom' | 'top';
	loading?: boolean;
	onClick?: onClickButtonType;
	disabled?: boolean;
	className?: string;
};
