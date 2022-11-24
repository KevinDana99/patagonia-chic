import { InputHTMLAttributes } from 'react';
import { TextWeightsType } from '../../../types/fontTypes';

export type InputPropsType = {
	label: string;
	onChange?: (newValue: string | number) => void;
	name?: string;
	defaultValue?: string | number;
	error?: boolean;
	className?: string;
	inputProps?: InputHTMLAttributes<HTMLInputElement>;
	disabled: boolean;
	labelTextWeight: TextWeightsType;
	labelTextColor: `#${string}`;
};

export interface InputProps {
	error: boolean;
}
