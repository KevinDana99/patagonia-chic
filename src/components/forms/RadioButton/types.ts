export type RadioButtonItemType = {
	label: string;
	value?: string | number;
	name?: string;
};

export type RadioButtonItemPropsType = {
	label: string;
	value: string | number;
	name: string;
	index: number;
	handleChange: React.ChangeEventHandler<HTMLInputElement>;
	checkedItem?: RadioButtonItemType;
};

export type RestrictedRadioButtonItemType = {
	label: string;
	value: string | number;
	name: string;
};

export type RadioButtonListPropsType = {
	list: RadioButtonItemType[];
	onChange: (newValue?: RadioButtonItemType) => void;
	defaultValue?: RadioButtonItemType;
};
