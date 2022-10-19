import { onClickButtonType } from '../../../types/eventTypes';

export type SecondaryButtonType = {
	title: string;
	loading?: boolean;
	onClick?: onClickButtonType;
	disabled?: boolean;
};
