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
};
