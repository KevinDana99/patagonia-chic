export interface CheckboxListItemType {
	title?: string;
	value?: string | number;
	name?: string;
}

export type CheckboxPropsType = {
	list: CheckboxListItemType[];
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
};
