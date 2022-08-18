export type InputPropsType = {
	label: string;
	onChange?: (newValue: string | number) => void;
	name?: string;
	defaultValue?: string | number;
	error?: boolean;
};

export interface InputProps {
	error: boolean;
}
