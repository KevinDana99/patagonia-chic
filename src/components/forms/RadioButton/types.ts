export interface RadioButtonItem {
	title?: string;
	value?: string | number;
	name?: string;
}

export type RadioButtonListItemProps = {
	list: RadioButtonItem[];
	onChange: React.ChangeEventHandler<HTMLInputElement>;
};
