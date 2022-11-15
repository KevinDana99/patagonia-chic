import { onClickButtonType } from '../../../types/eventTypes';

export type TertiaryButtonType = {
	className?: string;
	title?: string;
	loading?: boolean;
	onClick?: onClickButtonType;
	disabled?: boolean;
	children?: JSX.Element;
};
