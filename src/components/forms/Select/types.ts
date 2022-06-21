export type SelectOptionType = {
	value?: string | number;
	label: string;
	disabled: boolean;
};

export type SelectPropsType = {
	label: string;
	ListSelectOptions: SelectOptionType[];
	labelOption: string;
	onChange?: (value: string | number) => void;
};
