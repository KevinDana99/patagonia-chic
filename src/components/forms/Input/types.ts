import { InputHTMLAttributes } from 'react';

export type InputPropsType =  {
	label: string;
	onChange?: (newValue: string | number) => void;
	name?: string;
	defaultValue?: string | number;
	error?: boolean;
	className?: string;
	inputProps?: InputHTMLAttributes<HTMLInputElement>;
	disabled: boolean;
};

export interface InputProps {
	error: boolean;
}
