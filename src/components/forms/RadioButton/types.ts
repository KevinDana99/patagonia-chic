export type RadioButtonItemType = {
	label: string;
	value?: string | number;
	name?: string;
};

export type RadioButtonItemPropsType = {
	item: RadioButtonItemType;
	handleChange: React.ChangeEventHandler<HTMLInputElement>;
	checkedItem?: RadioButtonItemType | null;
	index: number;
};

export type RestrictedRadioButtonItemType = {
	label: string;
	value: string | number;
	name: string;
};

export type RadioButtonListPropsType = {
	list: RadioButtonItemType[];
	onChange: (newValue?: RadioButtonItemType | null) => void;
	defaultValue?: RadioButtonItemType | null | (() => RadioButtonItemType);
};
