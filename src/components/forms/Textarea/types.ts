export type TextareaPropsType = {
	label: string;
	onChange?: (newValue: string | number) => void;
	name?: string;
	defaultValue?: string | number;
	error?: boolean;
};

export interface TextareaProps {
	error: boolean;
}
