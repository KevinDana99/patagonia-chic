export type CheckboxListItemType = {
	label: string;
	value?: string | number;
	name?: string;
};

export type RestrictedCheckboxListItemType = {
	label: string;
	value: string | number;
	name: string;
};

export type CheckboxListPropsType = {
	list: CheckboxListItemType[];
	defaultValue: CheckboxListItemType[];
	onChange?: (newValue: CheckboxListItemType[]) => void;
};

export type CheckboxItemPropsType = {
	index: number;
	name: string;
	value: string | number;
	label: string;
	handleChange: React.ChangeEventHandler<HTMLInputElement>;
};
