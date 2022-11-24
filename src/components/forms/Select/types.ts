import { SelectHTMLAttributes } from 'react';
import { TextWeightsType } from '../../../types/fontTypes';

export type SelectOptionType = {
	value?: string | number;
	label: string;
	disabled?: boolean;
};

export type SelectPropsType = {
	label: string;
	ListSelectOptions: SelectOptionType[];
	placeholder: string;
	onChange?: (item: SelectOptionType) => void;
	className?: string;
	selectProps?: SelectHTMLAttributes<HTMLSelectElement>;
	disabled?: boolean;
	labelTextWeight: TextWeightsType;
	labelTextColor: `#${string}`;
};
