export type CheckboxListItemType = {
	title: string;
	value?: string | number;
	name?: string;
};

export type RestrictedCheckboxListItemType = {
	title: string;
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
	title: string;
	handleChange: React.ChangeEventHandler<HTMLInputElement>;
};
